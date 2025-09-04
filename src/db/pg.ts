import 'dotenv/config';
import { Pool } from 'pg';

function createPool(): Pool {
  if (process.env.DATABASE_URL) {
    return new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.PG_SSL?.toLowerCase() === 'true' ? { rejectUnauthorized: false } : undefined,
    });
  }

  return new Pool({
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT || 5432),
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    ssl: process.env.PG_SSL?.toLowerCase() === 'true' ? { rejectUnauthorized: false } : undefined,
  });
}

export const pgPool = createPool();


