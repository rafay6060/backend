import 'dotenv/config';
import mongoose from 'mongoose';
import { Client as PgClient } from 'pg';
import fs from 'fs';
import path from 'path';

// Mongo models
import User from '../models/User';
import Wallet from '../models/Wallet';
import Deposit from '../models/Deposit';
import Withdraw from '../models/Withdraw';
import MineCoin from '../models/Mine';
import EarnCoin from '../models/Earn';
import ClaimCoin from '../models/Claim';
import ReferralProgress from '../models/ReferralProgress';
import { OtpModel } from '../models/tempOtp';

type Nullable<T> = T | null;

const REQUIRED_ENV = [
  'MONGO_URI',
  'PG_HOST',
  'PG_PORT',
  'PG_DATABASE',
  'PG_USER',
  'PG_PASSWORD',
];

function ensureEnv() {
  const missing = REQUIRED_ENV.filter((k) => !process.env[k]);
  if (missing.length) {
    throw new Error(`Missing env variables: ${missing.join(', ')}`);
  }
}

function getPgClient() {
  return new PgClient({
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT),
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    ssl: process.env.PG_SSL?.toLowerCase() === 'true' ? { rejectUnauthorized: false } : undefined,
  });
}

function getPgAdminClient() {
  return new PgClient({
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT),
    database: process.env.PG_DEFAULT_DB || 'postgres',
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    ssl: process.env.PG_SSL?.toLowerCase() === 'true' ? { rejectUnauthorized: false } : undefined,
  });
}

function sanitizeDbName(dbName: string): string {
  if (!/^[a-zA-Z0-9_]+$/.test(dbName)) {
    throw new Error(`Unsafe database name: ${dbName}. Allowed: letters, digits, underscore.`);
  }
  return dbName;
}

async function ensureDatabaseExists() {
  const targetDb = sanitizeDbName(process.env.PG_DATABASE as string);
  const admin = getPgAdminClient();
  await admin.connect();
  try {
    const res = await admin.query('SELECT 1 FROM pg_database WHERE datname = $1', [targetDb]);
    if (res.rowCount === 0) {
      await admin.query(`CREATE DATABASE ${targetDb}`);
      console.log(`Created database ${targetDb}`);
    }
  } finally {
    await admin.end();
  }
}

async function ensurePgSchema(pg: PgClient) {
  // Create tables if not exist, with close mapping to Mongo schemas
  await pg.query(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    username TEXT NOT NULL,
    uid TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    number TEXT NOT NULL,
    phone TEXT,
    mail_otp TEXT,
    password TEXT NOT NULL,
    plain_password TEXT,
    status BOOLEAN DEFAULT FALSE,
    amount NUMERIC DEFAULT 0,
    remaining_balance NUMERIC DEFAULT 0,
    deposit_amount NUMERIC DEFAULT 0,
    withdrawal_amount NUMERIC DEFAULT 0,
    referral_code TEXT UNIQUE,
    referred_by TEXT,
    image TEXT,
    role TEXT DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE
  );

  CREATE TABLE IF NOT EXISTS wallets (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    private_key TEXT NOT NULL,
    public_key TEXT NOT NULL,
    type TEXT NOT NULL,
    amount NUMERIC DEFAULT 0,
    status BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE
  );

  CREATE TABLE IF NOT EXISTS deposits (
    id TEXT PRIMARY KEY,
    transaction_id TEXT NOT NULL UNIQUE,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    date TIMESTAMP WITH TIME ZONE,
    amount NUMERIC NOT NULL,
    address TEXT NOT NULL,
    to_address TEXT NOT NULL,
    trc_type TEXT NOT NULL,
    status BOOLEAN DEFAULT FALSE
  );

  CREATE TABLE IF NOT EXISTS withdrawals (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    date TIMESTAMP WITH TIME ZONE,
    type TEXT NOT NULL,
    amount NUMERIC NOT NULL,
    address TEXT NOT NULL,
    status BOOLEAN DEFAULT FALSE,
    status_withdraw TEXT NOT NULL,
    reason TEXT DEFAULT ''
  );

  CREATE TABLE IF NOT EXISTS mine_coins (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    is_start BOOLEAN DEFAULT FALSE,
    date TIMESTAMP WITH TIME ZONE,
    amount NUMERIC NOT NULL,
    start_time TIMESTAMP WITH TIME ZONE,
    status BOOLEAN DEFAULT TRUE
  );

  CREATE TABLE IF NOT EXISTS earn_coins (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    date TIMESTAMP WITH TIME ZONE,
    amount NUMERIC NOT NULL,
    status BOOLEAN DEFAULT TRUE
  );

  CREATE TABLE IF NOT EXISTS claim_coins (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    date TIMESTAMP WITH TIME ZONE,
    amount NUMERIC NOT NULL,
    status BOOLEAN DEFAULT TRUE
  );

  CREATE TABLE IF NOT EXISTS referral_progress (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    level INTEGER NOT NULL,
    referred_users TEXT[] DEFAULT ARRAY[]::TEXT[],
    unlocked BOOLEAN DEFAULT FALSE,
    required_count INTEGER NOT NULL,
    unlocked_at TIMESTAMP WITH TIME ZONE,
    UNIQUE(user_id, level)
  );

  CREATE TABLE IF NOT EXISTS temp_otps (
    id TEXT PRIMARY KEY,
    email TEXT NOT NULL,
    otp TEXT NOT NULL,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    verified BOOLEAN DEFAULT FALSE
  );
  `);
}

function ensureBackupDir(): string {
  const backupDir = path.join(process.cwd(), 'backups');
  if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });
  return backupDir;
}

async function backupCollection<T>(name: string, docs: T[]) {
  const dir = ensureBackupDir();
  const file = path.join(dir, `${name}-${Date.now()}.json`);
  fs.writeFileSync(file, JSON.stringify(docs, null, 2), 'utf-8');
  return file;
}

function toTextArray(ids: any[] | undefined): string[] {
  if (!ids) return [];
  return ids.map((v) => String(v));
}

async function migrate() {
  ensureEnv();

  // Mongo connect
  await mongoose.connect(process.env.MONGO_URI as string);

  // Postgres connect
  // Ensure target DB exists first (connects to admin DB)
  await ensureDatabaseExists();
  const pg = getPgClient();
  await pg.connect();
  await ensurePgSchema(pg);

  // Read all docs from Mongo
  const [users, wallets, deposits, withdrawals, mines, earns, claims, referrals, otps] = await Promise.all([
    User.find().lean(),
    Wallet.find().lean(),
    Deposit.find().lean(),
    Withdraw.find().lean(),
    MineCoin.find().lean(),
    EarnCoin.find().lean(),
    ClaimCoin.find().lean(),
    ReferralProgress.find().lean(),
    OtpModel.find().lean(),
  ]);

  const userIdSet = new Set((users as any[]).map((u) => String(u._id)));

  // Backup first
  const backupFiles = await Promise.all([
    backupCollection('users', users),
    backupCollection('wallets', wallets),
    backupCollection('deposits', deposits),
    backupCollection('withdrawals', withdrawals),
    backupCollection('mine_coins', mines),
    backupCollection('earn_coins', earns),
    backupCollection('claim_coins', claims),
    backupCollection('referral_progress', referrals),
    backupCollection('temp_otps', otps),
  ]);
  console.log('Backups written:', backupFiles);

  // Begin transaction
  await pg.query('BEGIN');
  try {
    // Users
    for (const u of users as any[]) {
      await pg.query(
        `INSERT INTO users (
          id, username, uid, email, number, phone, mail_otp, password, plain_password, status, amount,
          remaining_balance, deposit_amount, withdrawal_amount, referral_code, referred_by, image, role, created_at, updated_at
        ) VALUES (
          $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20
        ) ON CONFLICT (id) DO NOTHING`,
        [
          String(u._id), u.username, u.uid, u.email, u.number, u.phone ?? null, u.mailOtp ?? null,
          u.password, u.plainPassword ?? null, Boolean(u.status), Number(u.amount ?? 0),
          Number(u.remainingBalance ?? 0), Number(u.depositAmount ?? 0), Number(u.withdrawalAmount ?? 0),
          u.referralCode ?? null, u.referredBy ?? null, u.image ?? null, u.role ?? 'user',
          u.createdAt ? new Date(u.createdAt) : null, u.updatedAt ? new Date(u.updatedAt) : null,
        ],
      );
    }

    // Wallets (skip orphans)
    let skippedWallets = 0;
    for (const w of wallets as any[]) {
      if (!userIdSet.has(String(w.userId))) { skippedWallets++; continue; }
      await pg.query(
        `INSERT INTO wallets (
          id, user_id, private_key, public_key, type, amount, status, created_at, updated_at
        ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) ON CONFLICT (id) DO NOTHING`,
        [
          String(w._id), String(w.userId), w.privateKey, w.publicKey, w.type,
          Number(w.amount ?? 0), Boolean(w.status), w.createdAt ? new Date(w.createdAt) : null,
          w.updatedAt ? new Date(w.updatedAt) : null,
        ],
      );
    }
    if (skippedWallets) console.warn('Skipped wallets due to missing users: ' + skippedWallets);

    // Deposits (skip orphans)
    let skippedDeposits = 0;
    for (const d of deposits as any[]) {
      if (!userIdSet.has(String(d.userId))) { skippedDeposits++; continue; }
      await pg.query(
        `INSERT INTO deposits (
          id, transaction_id, user_id, date, amount, address, to_address, trc_type, status
        ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) ON CONFLICT (id) DO NOTHING`,
        [
          String(d._id), d.transaction_Id, String(d.userId), d.date ? new Date(d.date) : null,
          Number(d.amount), d.address, d.toAddress, d.trcType, Boolean(d.status),
        ],
      );
    }
    if (skippedDeposits) console.warn('Skipped deposits due to missing users: ' + skippedDeposits);

    // Withdrawals (skip orphans)
    let skippedWithdrawals = 0;
    for (const w of withdrawals as any[]) {
      if (!userIdSet.has(String(w.userId))) { skippedWithdrawals++; continue; }
      await pg.query(
        `INSERT INTO withdrawals (
          id, user_id, date, type, amount, address, status, status_withdraw, reason
        ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) ON CONFLICT (id) DO NOTHING`,
        [
          String(w._id), String(w.userId), w.date ? new Date(w.date) : null, w.type, Number(w.amount),
          w.address, Boolean(w.status), w.statusWithdraw, w.reason ?? '',
        ],
      );
    }
    if (skippedWithdrawals) console.warn('Skipped withdrawals due to missing users: ' + skippedWithdrawals);

    // Mine coins (skip orphans)
    let skippedMines = 0;
    for (const m of mines as any[]) {
      if (!userIdSet.has(String(m.userId))) { skippedMines++; continue; }
      await pg.query(
        `INSERT INTO mine_coins (
          id, user_id, is_start, date, amount, start_time, status
        ) VALUES ($1,$2,$3,$4,$5,$6,$7) ON CONFLICT (id) DO NOTHING`,
        [
          String(m._id), String(m.userId), Boolean(m.isStart), m.date ? new Date(m.date) : null,
          Number(m.amount), m.startTime ? new Date(m.startTime) : null, Boolean(m.status),
        ],
      );
    }
    if (skippedMines) console.warn('Skipped mine_coins due to missing users: ' + skippedMines);

    // Earn coins (skip orphans)
    let skippedEarns = 0;
    for (const e of earns as any[]) {
      if (!userIdSet.has(String(e.userId))) { skippedEarns++; continue; }
      await pg.query(
        `INSERT INTO earn_coins (
          id, user_id, date, amount, status
        ) VALUES ($1,$2,$3,$4,$5) ON CONFLICT (id) DO NOTHING`,
        [
          String(e._id), String(e.userId), e.date ? new Date(e.date) : null, Number(e.amount), Boolean(e.status),
        ],
      );
    }
    if (skippedEarns) console.warn('Skipped earn_coins due to missing users: ' + skippedEarns);

    // Claim coins (skip orphans)
    let skippedClaims = 0;
    for (const c of claims as any[]) {
      if (!userIdSet.has(String(c.userId))) { skippedClaims++; continue; }
      await pg.query(
        `INSERT INTO claim_coins (
          id, user_id, date, amount, status
        ) VALUES ($1,$2,$3,$4,$5) ON CONFLICT (id) DO NOTHING`,
        [
          String(c._id), String(c.userId), c.date ? new Date(c.date) : null, Number(c.amount), Boolean(c.status),
        ],
      );
    }
    if (skippedClaims) console.warn('Skipped claim_coins due to missing users: ' + skippedClaims);

    // Referral progress (skip orphans)
    let skippedReferrals = 0;
    for (const r of referrals as any[]) {
      if (!userIdSet.has(String(r.userId))) { skippedReferrals++; continue; }
      await pg.query(
        `INSERT INTO referral_progress (
          id, user_id, level, referred_users, unlocked, required_count, unlocked_at
        ) VALUES ($1,$2,$3,$4,$5,$6,$7) ON CONFLICT (id) DO NOTHING`,
        [
          String(r._id), String(r.userId), Number(r.level), toTextArray(r.referredUsers), Boolean(r.unlocked),
          Number(r.requiredCount), r.unlockedAt ? new Date(r.unlockedAt) : null,
        ],
      );
    }
    if (skippedReferrals) console.warn('Skipped referral_progress due to missing users: ' + skippedReferrals);

    // temp otps
    for (const t of otps as any[]) {
      await pg.query(
        `INSERT INTO temp_otps (
          id, email, otp, expires_at, verified
        ) VALUES ($1,$2,$3,$4,$5) ON CONFLICT (id) DO NOTHING`,
        [String(t._id), t.email, t.otp, new Date(t.expiresAt), Boolean(t.verified)],
      );
    }

    await pg.query('COMMIT');
    console.log('Migration completed successfully');
  } catch (err) {
    await pg.query('ROLLBACK');
    console.error('Migration failed, rolled back', err);
    throw err;
  } finally {
    await pg.end();
    await mongoose.disconnect();
  }
}

migrate().catch((e) => {
  console.error(e);
  process.exit(1);
});


