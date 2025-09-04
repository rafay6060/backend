import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import { OtpModel } from '../models/tempOtp';
import User from '../models/User';
import Wallet from '../models/Wallet';
import Withdraw from '../models/Withdraw';
import { createAddress } from '../utils/apiCheckDeposit';
import Claim from '../models/Claim';
import Deposit from '../models/Deposit';
import Mine from '../models/Mine';
import Earn from '../models/Earn';
import ReferralProgress from '../models/ReferralProgress';
import { prisma } from '../db/prisma';
const levelCriteria: Record<number, number> = {
    1: 3,  // Level 1 unlocked by default
    2: 6,
    3: 9,
    4: 12,
    5: 15,
    6: 18,
};

// export const updateReferralProgress = async (userId: string, referredUserId: string) => {
//     const objectId = new mongoose.Types.ObjectId(referredUserId);
//     const userDI = new mongoose.Types.ObjectId(userId)
//     let referredUserAdded = false;
//     let allowNextLevelCheck = true;

//     for (let level = 1; level <= 6; level++) {
//         const requiredCount = levelCriteria[level];
//         let progress = await ReferralProgress.findOne({ userId: userDI, level });

//         console.log(progress, "Level Count", requiredCount);

//         // Always ensure progress object exists
//         if (!progress) {
//             progress = new ReferralProgress({
//                 userId,
//                 level,
//                 referredUsers: [],
//                 unlocked: level === 1, // only level 1 unlocked by default
//                 unlockedAt: level === 1 ? new Date() : undefined,
//                 requiredCount,
//             });

//             console.log(progress, "Level Count", requiredCount, progress?.referredUsers!.length >= requiredCount);

//         }

//         // If current level is not eligible (prior not unlocked and completed), stop
//         if (!allowNextLevelCheck && level !== 1) break;

//         let updated = false;

//         // Add referred user only once, to the first eligible level
//         if (!referredUserAdded && !progress.referredUsers.some(id => id.equals(objectId))) {
//             progress.referredUsers.push(objectId);
//             referredUserAdded = true;
//             updated = true;
//         }

//         // Unlock this level if criteria met
//         if (!progress.unlocked && progress.referredUsers.length >= requiredCount) {
//             progress.unlocked = true;
//             progress.unlockedAt = new Date();
//             updated = true;
//         }

//         if (updated) {
//             await progress.save();
//         }

//         // Allow checking next level only if this one is unlocked and completed
//         allowNextLevelCheck = progress.unlocked && progress.referredUsers.length >= requiredCount;
//     }
// };


export const updateReferralProgress = async (userId: string, referredUserId: string) => {
    const objectId = new mongoose.Types.ObjectId(referredUserId);
    const userObjectId = new mongoose.Types.ObjectId(userId);

    for (let level = 1; level <= 6; level++) {
        const requiredCount = levelCriteria[level];
        let progress = await ReferralProgress.findOne({ userId: userObjectId, level });

        if (!progress) {
            progress = await ReferralProgress.create({
                userId: userObjectId,
                level,
                referredUsers: [],
                unlocked: level === 1,
                unlockedAt: level === 1 ? new Date() : undefined,
                requiredCount,
            });
        }

        // If level not unlocked and previous level is not completed, stop processing
        if (level > 1) {
            const prevLevel = await ReferralProgress.findOne({ userId: userObjectId, level: level - 1 });
            if (!prevLevel || !prevLevel.unlocked) {
                break; // Can't add to this level if previous not unlocked
            }
        }

        // Only add the referred user once in the first level that has space
        if (!progress.referredUsers.some(id => id.equals(objectId))) {
            if (progress.referredUsers.length < requiredCount) {
                progress.referredUsers.push(objectId);
                progress.unlocked = progress.referredUsers.length >= requiredCount;
                if (!progress.unlocked && !progress.unlockedAt) {
                    progress.unlockedAt = new Date();
                    progress.unlocked = true
                }
                await progress.save();
                break; // Stop after adding to one level
            }
        }
    }
};



// Helper to check if previous level is unlocked
const isPreviousLevelUnlocked = async (userId: string, currentLevel: number): Promise<boolean> => {
    if (currentLevel <= 1) return true; // Level 1 is always unlocked by default
    const prev = await ReferralProgress.findOne({ userId, level: currentLevel - 1 });
    return !!(prev && prev.unlocked);
};


// export const updateReferralProgress = async (userId: string, referredUserId: string) => {
//     const objectId = new mongoose.Types.ObjectId(referredUserId);

//     for (let level = 1; level <= 6; level++) {
//         const requiredCount = levelCriteria[level];
//         let progress = await ReferralProgress.findOne({ userId, level });

//         // Create a new progress record if missing
//         if (!progress) {
//             progress = new ReferralProgress({
//                 userId,
//                 level,
//                 referredUsers: [],
//                 unlocked: level === 1,
//                 unlockedAt: level === 1 ? new Date() : undefined,
//                 requiredCount,
//             });
//         }

//         // Only proceed if level 1 or previous level unlocked
//         if (level === 1 || (await isPreviousLevelUnlocked(userId, level))) {
//             // Only add referredUser if not already in this level
//             if (!progress.referredUsers.some(id => id.equals(objectId))) {
//                 progress.referredUsers.push(objectId);

//                 // Unlock this level if criteria met and not unlocked yet
//                 if (!progress.unlocked && progress.referredUsers.length >= requiredCount) {
//                     progress.unlocked = true;
//                     progress.unlockedAt = new Date();
//                 }

//                 await progress.save();

//                 // After adding referredUser to this level, stop adding to higher levels
//                 break;
//             } else {
//                 // User already counted in this level, no need to proceed higher
//                 break;
//             }
//         } else {
//             // Previous level locked, stop processing
//             break;
//         }
//     }
// };




const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

const sendOtpMail = async (email: string, otp: string) => {
    const transporter = nodemailer.createTransport({
        host: 'mail.privateemail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'info@getminetreasure.com',
            pass: 'Nomi03173818',
        },
    });

    const mailOptions = {
        from: `"GMT Official" <info@getminetreasure.com>`,
        to: email,
        subject: 'GMT Official - Email Verification Code',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
                <h2 style="color: #333;">Greetings,</h2>
                <p style="font-size: 16px; color: #555;">
                    Below is your email verification code from <strong>GMT Official</strong>.
                </p>
                <p style="font-size: 16px; color: #555;">
                    To complete this email verification, please enter the code and proceed to the next step:
                </p>
                <div style="text-align: center; margin: 20px 0;">
                    <span style="display: inline-block; padding: 12px 24px; font-size: 24px; background-color: #f5f5f5; border: 2px dashed #aaa; border-radius: 6px; color: #333;">
                        ${otp}
                    </span>
                </div>
                <p style="font-size: 16px; color: #555;">
                    This code will be valid for 5 minutes after request and is available to resend if it expires.
                </p>
                <p style="font-size: 16px; color: #555;">
                    Thank you!<br>
                   
                </p>
                
            </div>
        `,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('OTP mail sent:', info.response);
    } catch (error) {
        console.error('Error sending OTP mail:', error);
    }
};


const generateReferralCode = (username: string) => {
    const cleanUsername = username.trim().replace(/\s+/g, '').toLowerCase(); // Remove spaces and make lowercase
    return `${cleanUsername}${Math.floor(1000 + Math.random() * 9000)}`;
};

const generateUID = (): string => {
    return crypto.randomBytes(8).toString('hex'); // 8 bytes = 16 hex characters
};



const generateUniqueField = async (fieldName: 'uid' | 'referralCode', generator: () => string): Promise<string> => {
    let unique = false;
    let value = '';

    while (!unique) {
        value = generator();
        const exists = await User.findOne({ [fieldName]: value });
        if (!exists) unique = true;
    }

    return value;
};

export const register = async (req: any, res: any) => {
  try {
    const { username, email, number, password, referredBy } = req.body;

    // Check existing by email (PostgreSQL)
    const existing = await prisma.users.findUnique({ where: { email } });
    if (existing) return res.status(400).json({ message: 'Email already registered' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = generateOtp();

    // Generate unique uid and referral_code using Prisma
    async function generateUniqueWithCheck(field: 'uid' | 'referral_code', generator: () => string): Promise<string> {
      while (true) {
        const value = generator();
        const exists = await prisma.users.findFirst({ where: { [field]: value } as any });
        if (!exists) return value;
      }
    }

    const uid = await generateUniqueWithCheck('uid', generateUID);
    const referralCode = await generateUniqueWithCheck('referral_code', () => generateReferralCode(username));

    const refUser = referredBy
      ? await prisma.users.findFirst({ where: { referral_code: referredBy } })
      : null;

    // Create user
    const createdUser = await prisma.users.create({
      data: {
        id: crypto.randomBytes(12).toString('hex'),
        username,
        uid,
        email,
        number,
        password: hashedPassword,
        plain_password: password,
        mail_otp: otp,
        referral_code: referralCode,
        referred_by: refUser ? refUser.id : null,
        role: 'user',
        status: false,
        amount: 0,
        remaining_balance: 0,
        deposit_amount: 0,
        withdrawal_amount: 0,
      },
    });

    // Create wallet with Tron address
    const account = await createAddress();
    await prisma.wallets.create({
      data: {
        id: crypto.randomBytes(12).toString('hex'),
        user_id: createdUser.id,
        private_key: account?.privateKey,
        public_key: account.address.base58,
        type: 'USDT',
        amount: 0,
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    // TEMP: Dual-write to Mongo during migration to avoid breaking existing endpoints
    try {
      const refUserMongo = referredBy ? await User.findOne({ referralCode: referredBy }) : null;
      const mongoUser = new User({
        username,
        uid,
        email,
        number,
        password: hashedPassword,
        plainPassword: password,
        mailOtp: otp,
        referralCode,
        referredBy: refUserMongo?._id ?? null,
        role: 'user',
        status: false,
      });
      const savedMongoUser = await mongoUser.save();
      const mongoWallet = new Wallet({
        userId: savedMongoUser._id,
        privateKey: account?.privateKey,
        publicKey: account.address.base58,
        type: 'USDT',
        amount: 0,
        status: true,
      });
      await mongoWallet.save();
    } catch (e) {
      console.warn('Mongo dual-write failed (non-fatal during migration):', e);
    }

    // TODO: Convert updateReferralProgress to Prisma and call it here if needed
    // if (refUser) { await updateReferralProgressPrisma(refUser.id, createdUser.id); }

    // Optionally send email OTP here
    // await sendOtpMail(email, otp);

    return res.status(200).json({ message: 'User registered', user: { id: createdUser.id, email: createdUser.email, username: createdUser.username } });
  } catch (error) {
    console.error('Register (Prisma) error:', error);
    return res.status(500).json({ message: 'Server Error', error });
  }
};




export const sentOtp = async (req: any, res: any) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(400).json({ message: 'Please Pass Email' });
        const otp = generateOtp();
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
        await OtpModel.deleteMany({ email });
        await OtpModel.create({ email, otp, expiresAt });
        await sendOtpMail(email, otp);
        res.status(200).json({ message: "Sent Otp Success" });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
}

export const verifyOtp = async (req: any, res: any) => {
    try {
        const { email, otp } = req.body;
        const record = await OtpModel.findOne({ email, otp });
        if (!record) {
            return res.status(400).json({ message: 'Your Otp Email Not Valid' });
        }
        if (record.expiresAt < new Date()) {
            return res.status(400).json({ message: 'Your OTP expired' });
        }
        res.status(200).json({ message: "Verify Success" });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};
export const login = async (req: any, res: any) => {
  try {
    const { username, password } = req.body;
    const user = await prisma.users.findFirst({
      where: { OR: [{ email: username }, { username }] },
    });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id }, 'sdfhsdgfkuyjgfhiwewhr7345t478y45h743gf6734g45');
    return res.status(200).json({ token, user, message: 'User Login Success' });
  } catch (error) {
    console.error('Login (Prisma) error:', error);
    return res.status(500).json({ message: 'Server Error', error });
  }
};



export const getUserById = async (req: any, res: any) => {
    try {
        const userId = new mongoose.Types.ObjectId(req.params.id);

        const user = await User.aggregate([
            { $match: { _id: userId } },
            {
                $addFields: {
                    referredByObjectId: {
                        $cond: {
                            if: { $eq: ['$referredBy', null] },
                            then: null,
                            else: { $toObjectId: '$referredBy' }
                        }
                    }
                }
            },
            {
                $lookup: {
                    from: 'users', // collection name in MongoDB (lowercase and plural)
                    localField: 'referredByObjectId',
                    foreignField: '_id',
                    as: 'referredByDetails'
                }
            },
            {
                $unwind: {
                    path: '$referredByDetails',
                    preserveNullAndEmptyArrays: true // In case referredBy is null
                }
            },
            {
                $lookup: {
                    from: 'wallets', // collection name in MongoDB (lowercase and plural)
                    localField: '_id',
                    foreignField: 'userId',
                    as: 'wallet'
                }
            },
            {
                $lookup: {
                    from: 'deposits', // collection name in MongoDB (lowercase and plural)
                    localField: '_id',
                    foreignField: 'userId',
                    as: 'deposits'
                }
            },
            {
                $lookup: {
                    from: 'minecoins', // collection name in MongoDB (lowercase and plural)
                    localField: '_id',
                    foreignField: 'userId',
                    as: 'mineCoin'
                }
            },
            {
                $lookup: {
                    from: 'claimcoins', // collection name in MongoDB (lowercase and plural)
                    localField: '_id',
                    foreignField: 'userId',
                    as: 'claimCoin'
                }
            },
            {
                $lookup: {
                    from: 'withdraws', // collection name in MongoDB (lowercase and plural)
                    localField: '_id',
                    foreignField: 'userId',
                    as: 'withdraw'
                }
            },
            {
                $lookup: {
                    from: 'earncoins', // collection name in MongoDB (lowercase and plural)
                    localField: '_id',
                    foreignField: 'userId',
                    as: 'earnCoin'
                }
            },
            {
                $lookup: {
                    from: 'referralprogresses', // collection name in MongoDB (lowercase and plural)
                    localField: '_id',
                    foreignField: 'userId',
                    as: 'referralProgress'
                }
            },
            // Unwind referralProgress array for processing each entry
            { $unwind: { path: '$referralProgress', preserveNullAndEmptyArrays: true } },
            // Unwind referralUserId array inside each referralProgress to process each referred user separately
            { $unwind: { path: '$referralProgress.referredUsers', preserveNullAndEmptyArrays: true } },
            {
                $lookup: {
                    from: 'users',
                    localField: 'referralProgress.referredUsers', // assuming this field stores referred user's id
                    foreignField: '_id',
                    as: 'referredUserDetails'
                }
            },
            { $unwind: { path: '$referredUserDetails', preserveNullAndEmptyArrays: true } },
            {
                $lookup: {
                    from: 'deposits',
                    localField: 'referralProgress.referredUsers',
                    foreignField: 'userId',
                    as: 'referredUserDeposits'
                }
            },
            {
                $addFields: {
                    'referralProgress.referredUser': '$referredUserDetails',
                    'referralProgress.totalDeposit': {
                        $sum: {
                            $map: {
                                input: '$referredUserDeposits',
                                as: 'dep',
                                in: { $ifNull: ['$$dep.amount', 0] }
                            }
                        }
                    }
                }
            },

            {
                $group: {
                    _id: '$_id',
                    username: { $first: '$username' },
                    image: { $first: '$image' },
                    email: { $first: '$email' },
                    uid: { $first: '$uid' },
                    number: { $first: '$number' },
                    depositAmount: { $first: '$depositAmount' },
                    referralCode: { $first: '$referralCode' },
                    referredBy: { $first: '$referredBy' },
                    referralProgress: { $push: '$referralProgress' },
                    referredByObjectId: { $first: '$referredByObjectId' },
                    referredByDetails: { $first: '$referredByDetails' },
                    wallet: { $first: '$wallet' },
                    deposits: { $first: '$deposits' },
                    mineCoin: { $first: '$mineCoin' },
                    claimCoin: { $first: '$claimCoin' },
                    withdraw: { $first: '$withdraw' },
                    earnCoin: { $first: '$earnCoin' }
                }
            },
            {
                $addFields: {
                    // prefer admin override if present
                    totalDepositDisplay: {
                        $cond: [
                            { $gt: [{ $ifNull: ['$depositAmount', 0] }, 0] },
                            '$depositAmount',
                            { $sum: { $map: { input: '$deposits', as: 'd', in: { $ifNull: ['$$d.amount', 0] } } } }
                        ]
                    }
                }
            },
            {
                $addFields: {
                    levels: {
                        $map: {
                            input: [1, 2, 3, 4, 5, 6],
                            as: 'level',
                            in: {
                                id: '$$level',
                                title: { $concat: ['Level ', { $toString: '$$level' }] },

                                // Filter referralProgress by this level
                                users: {
                                    $filter: {
                                        input: '$referralProgress',
                                        as: 'progress',
                                        cond: { $eq: ['$$progress.level', '$$level'] }
                                    }
                                },

                                // Count total users at this level
                                totalUser: {
                                    $size: {
                                        $filter: {
                                            input: '$referralProgress',
                                            as: 'progress',
                                            cond: { $eq: ['$$progress.level', '$$level'] }
                                        }
                                    }
                                },

                                // unlocked true if any user at level has unlocked = true
                                unlocked: {
                                    $gt: [
                                        {
                                            $size: {
                                                $filter: {
                                                    input: {
                                                        $filter: {
                                                            input: '$referralProgress',
                                                            as: 'progress',
                                                            cond: { $eq: ['$$progress.level', '$$level'] }
                                                        }
                                                    },
                                                    as: 'p',
                                                    cond: { $eq: ['$$p.unlocked', true] }
                                                }
                                            }
                                        },
                                        0
                                    ]
                                },

                                price: {
                                    $cond: {
                                        if: { $eq: ['$$level', 1] },
                                        then: 100,
                                        else: 0
                                    }
                                },

                                // Sum total deposits for all users at this level
                                totalDepositAtLevel: {
                                    $sum: {
                                        $map: {
                                            input: {
                                                $filter: {
                                                    input: '$referralProgress',
                                                    as: 'progress',
                                                    cond: { $eq: ['$$progress.level', '$$level'] }
                                                }
                                            },
                                            as: 'p',
                                            in: { $ifNull: ['$$p.totalDeposit', 0] }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

        ]);

        // {
        //     $addFields: {
        //         levels: {
        //             $map: {
        //                 input: [1, 2, 3, 4, 5, 6],
        //                 as: 'level',
        //                 in: {
        //                     id: '$$level',
        //                     title: { $concat: ['Level ', { $toString: '$$level' }] },
        //                     totalUser: {
        //                         $size: {
        //                             $filter: {
        //                                 input: { $ifNull: ['$referralProgress', []] },
        //                                 as: 'progress',
        //                                 cond: { $eq: ['$$progress.level', '$$level'] }
        //                             }
        //                         }
        //                     },
        //                     unlocked: {
        //                         $cond: {
        //                             if: {
        //                                 $gt: [
        //                                     {
        //                                         $size: {
        //                                             $filter: {
        //                                                 input: { $ifNull: ['$referralProgress', []] },
        //                                                 as: 'progress',
        //                                                 cond: {
        //                                                     $and: [
        //                                                         { $eq: ['$$progress.level', '$$level'] },
        //                                                         { $eq: ['$$progress.unlocked', true] }
        //                                                     ]
        //                                                 }
        //                                             }
        //                                         }
        //                                     },
        //                                     0
        //                                 ]
        //                             },
        //                             then: true,
        //                             else: false
        //                         }
        //                     },
        //                     price: {
        //                         $cond: {
        //                             if: { $eq: ['$$level', 1] },
        //                             then: 100,
        //                             else: 0
        //                         }
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // }
        const referralUser = await User.aggregate([
            { $match: { referredBy: user[0]?._id.toString() } },
            {
                $addFields: {
                    referredByObjectId: {
                        $cond: {
                            if: { $eq: ['$referredBy', null] },
                            then: null,
                            else: { $toObjectId: '$referredBy' }
                        }
                    }
                }
            },
            {
                $lookup: {
                    from: 'users', // collection name in MongoDB (lowercase and plural)
                    localField: 'referredByObjectId',
                    foreignField: '_id',
                    as: 'referredByDetails'
                }
            },
            {
                $unwind: {
                    path: '$referredByDetails',
                    preserveNullAndEmptyArrays: true // In case referredBy is null
                }
            },
            {
                $lookup: {
                    from: 'wallets', // collection name in MongoDB (lowercase and plural)
                    localField: '_id',
                    foreignField: 'userId',
                    as: 'wallet'
                }
            },
            {
                $lookup: {
                    from: 'claimcoins', // collection name in MongoDB (lowercase and plural)
                    localField: '_id',
                    foreignField: 'userId',
                    as: 'claimCoin'
                }
            },
            {
                $addFields: {
                    ownClaimCoinSum: { $sum: "$claimCoin.amount" }
                }
            },
        ]);
        if (!user || user.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        user[0].referralUsers = referralUser;
        res.status(200).json({ user: user[0], message: 'User Fetch Success' });
    } catch (error) {
        console.error('Aggregation error:', error);
        res.status(500).json({ message: 'Server Error', error });
    }
};




export const getAllUser = async (req: any, res: any) => {
    try {

        const user = await User.aggregate([
            // { $match: { _id: userId } },
            {
                $addFields: {
                    referredByObjectId: {
                        $cond: {
                            if: { $eq: ['$referredBy', null] },
                            then: null,
                            else: { $toObjectId: '$referredBy' }
                        }
                    }
                }
            },
            {
                $lookup: {
                    from: 'users', // collection name in MongoDB (lowercase and plural)
                    localField: 'referredByObjectId',
                    foreignField: '_id',
                    as: 'referredByDetails'
                }
            },
            {
                $unwind: {
                    path: '$referredByDetails',
                    preserveNullAndEmptyArrays: true // In case referredBy is null
                }
            },
            {
                $lookup: {
                    from: 'wallets', // collection name in MongoDB (lowercase and plural)
                    localField: '_id',
                    foreignField: 'userId',
                    as: 'wallet'
                }
            },
            {
                $lookup: {
                    from: 'deposits', // collection name in MongoDB (lowercase and plural)
                    localField: '_id',
                    foreignField: 'userId',
                    as: 'deposits'
                }
            },
            {
                $lookup: {
                    from: 'minecoins', // collection name in MongoDB (lowercase and plural)
                    localField: '_id',
                    foreignField: 'userId',
                    as: 'mineCoin'
                }
            },
            {
                $lookup: {
                    from: 'claimcoins', // collection name in MongoDB (lowercase and plural)
                    localField: '_id',
                    foreignField: 'userId',
                    as: 'claimCoin'
                }
            },
            {
                $lookup: {
                    from: 'withdraws', // collection name in MongoDB (lowercase and plural)
                    localField: '_id',
                    foreignField: 'userId',
                    as: 'withdraw'
                }
            },
            {
                $lookup: {
                    from: 'earncoins', // collection name in MongoDB (lowercase and plural)
                    localField: '_id',
                    foreignField: 'userId',
                    as: 'earnCoin'
                }
            }
        ]);
        // const referralUser = await User.aggregate([
        //     { $match: { referredBy: user[0]?._id.toString() } },
        //     {
        //         $addFields: {
        //             referredByObjectId: {
        //                 $cond: {
        //                     if: { $eq: ['$referredBy', null] },
        //                     then: null,
        //                     else: { $toObjectId: '$referredBy' }
        //                 }
        //             }
        //         }
        //     },
        //     {
        //         $lookup: {
        //             from: 'users', // collection name in MongoDB (lowercase and plural)
        //             localField: 'referredByObjectId',
        //             foreignField: '_id',
        //             as: 'referredByDetails'
        //         }
        //     },
        //     {
        //         $unwind: {
        //             path: '$referredByDetails',
        //             preserveNullAndEmptyArrays: true // In case referredBy is null
        //         }
        //     },
        //     {
        //         $lookup: {
        //             from: 'wallets', // collection name in MongoDB (lowercase and plural)
        //             localField: '_id',
        //             foreignField: 'userId',
        //             as: 'wallet'
        //         }
        //     },
        //     {
        //         $lookup: {
        //             from: 'claimcoins', // collection name in MongoDB (lowercase and plural)
        //             localField: '_id',
        //             foreignField: 'userId',
        //             as: 'claimCoin'
        //         }
        //     },
        //     {
        //         $addFields: {
        //             ownClaimCoinSum: { $sum: "$claimCoin.amount" }
        //         }
        //     },
        // ]);
        // if (!user || user.length === 0) {
        //     return res.status(404).json({ message: 'User not found' });
        // }
        // user[0].referralUsers = referralUser;
        res.status(200).json({ user: user, message: 'User Fetch Success' });
    } catch (error) {
        console.error('Aggregation error:', error);
        res.status(500).json({ message: 'Server Error', error });
    }
};


export const sendMailOtp = async (req: any, res: any) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ message: 'email is required' });
        }
        const user = await User.findOne({ email: email });
        if (!user) return res.status(404).json({ message: 'User not found' });
        const otp = generateOtp();
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
        await OtpModel.deleteMany({ email });
        await OtpModel.create({ email, otp, expiresAt });
        await sendOtpMail(email, otp);
        res.status(200).json({ message: "Sent Otp Success" });
    } catch (error) {
        console.error('Aggregation error:', error);
        res.status(500).json({ message: 'Server Error', error });
    }
}

export const updatePassword = async (req: any, res: any) => {

    try {
        const { email, password, cPassword, otpCode } = req.body;
        const existingUser = await User.findOne({ email });
        if (!existingUser) return res.status(404).json({ message: 'User Not Fund' });
        const record = await OtpModel.findOne({ email, otp: otpCode });
        if (!record) {
            return res.status(400).json({ message: 'Your Otp Email Not Valid' });
        }
        if (record.expiresAt < new Date()) {
            return res.status(400).json({ message: 'Your OTP expired' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        existingUser.password = hashedPassword;
        existingUser.plainPassword = cPassword;
        await existingUser.save();
        res.status(200).json({ message: "Update Password Success" });
    } catch (error) {
        console.error('Aggregation error:', error);
        res.status(500).json({ message: 'Server Error', error });
    }

}

export const createWithdraw = async (req: any, res: any) => {
    try {
        const { amount, address, date, type, userId } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({ message: 'User not founded' });
        }
        const wallet = await Wallet.findOne({ userId: user?._id });
        if (wallet) {
            const am = wallet.amount;
            wallet.amount = am - parseInt(amount);
            await wallet.save();
        }

        if (type === 'reward') {
            let remaining = parseFloat(amount);
            const claimCoins = await Claim.find({ userId: user._id, status: true }).sort({ date: 1 });
            for (const claim of claimCoins) {
                if (remaining <= 0) break;
                const deductAmount = Math.min(remaining, claim.amount);
                claim.amount -= deductAmount;
                remaining -= deductAmount;
                // Mark claimCoin as inactive if fully used
                if (claim.amount <= 0) {
                    claim.status = false;
                }

                await claim.save();
            }
            if (remaining > 0) {
                return res.status(400).json({ message: 'Insufficient reward balance in claim coins' });
            }
            const mine = await Mine.findOne({ userId: user?.id });
            if (mine) {
                const decrementAmount = parseFloat(amount);
                // mine.amount = Math.max(0, (mine.amount || 0) - decrementAmount); // prevent negative amounts
                mine.isStart = false;
                mine.startTime = new Date();
                await mine.save();
            }

        } else {
            // Total withdraw: deduct from Deposits first, then from admin override (user.depositAmount) if necessary
            let remaining = Math.max(0, Number(amount) || 0);
            const openDeposits = await Deposit.find({ userId: user._id, status: false }).sort({ date: 1 });
            const depositsSum = openDeposits.reduce((s, d) => s + (Number(d.amount) || 0), 0);
            const overrideTotal = Number(user.depositAmount || 0);
            const availableTotal = overrideTotal > 0 ? overrideTotal : depositsSum;

            if (availableTotal + 1e-6 < remaining) {
                return res.status(400).json({ message: 'Insufficient total deposit balance' });
            }

            for (const dep of openDeposits) {
                if (remaining <= 0) break;
                const canDeduct = Math.min(remaining, Number(dep.amount) || 0);
                if (canDeduct > 0) {
                    dep.amount = Number(((dep.amount || 0) - canDeduct).toFixed(2));
                    remaining = Number((remaining - canDeduct).toFixed(2));
                    if (dep.amount <= 0) dep.status = false;
                    await dep.save();
                }
            }

            if (remaining > 0 && overrideTotal > depositsSum) {
                const newOverride = Number((overrideTotal - remaining).toFixed(2));
                user.depositAmount = newOverride < 0.01 ? 0 : newOverride; // clamp dust
                remaining = 0;
                await user.save();
            }

            if (remaining > 0 && remaining < 0.01) { remaining = 0; }
            if (remaining > 0) {
                return res.status(400).json({ message: 'Unable to deduct full amount from deposits/override' });
            }

            const mine = await Mine.findOne({ userId: user?.id });
            if (mine) {
                const decrementAmount = Number(amount) || 0;
                mine.amount = Math.max(0, Number(((mine.amount || 0) - decrementAmount).toFixed(2)));
                mine.isStart = false;
                mine.startTime = new Date();
                await mine.save();
            }

            // After deductions, set user's depositAmount to effective new total so UI (Total Withdraw Available) reflects correctly
            try {
                const effectiveAfter = Math.max(0, Number((availableTotal - (Number(amount) || 0)).toFixed(2)));
                user.depositAmount = effectiveAfter;
                await user.save();
            } catch (e) {
                console.warn('Failed to sync user.depositAmount after total withdraw', e);
            }

        }
        const withdraw = new Withdraw({
            userId: userId,
            type,
            address,
            amount,
            date,
        });
        await withdraw.save();
        res.status(200).json({ message: "Create Withdraw Success" });
    } catch (error) {
        console.error('Aggregation error:', error);
        res.status(500).json({ message: 'Server Error', error });
    }
}



// Add balance check endpoint
export const checkBalance = async (req: any, res: any) => {
    try {
        const userId = new mongoose.Types.ObjectId(req.params.userId);
        
        const claimCoins = await Claim.find({ userId: userId });
        const earnCoins = await Earn.find({ userId: userId });
        
        // Filter active coins (status true or undefined)
        const activeClaimCoins = claimCoins.filter(coin => coin.status !== false);
        const activeEarnCoins = earnCoins.filter(coin => coin.status !== false);
        
        const totalClaimBalance = activeClaimCoins.reduce((sum, coin) => sum + coin.amount, 0);
        const totalEarnBalance = activeEarnCoins.reduce((sum, coin) => sum + coin.amount, 0);
        const totalAvailableBalance = totalClaimBalance + totalEarnBalance;
        
        res.status(200).json({
            totalClaimBalance,
            totalEarnBalance,
            totalAvailableBalance,
            activeClaimCoins: activeClaimCoins.map(c => ({ id: c._id, amount: c.amount, status: c.status })),
            activeEarnCoins: activeEarnCoins.map(e => ({ id: e._id, amount: e.amount, status: e.status })),
            allClaimCoins: claimCoins.map(c => ({ id: c._id, amount: c.amount, status: c.status })),
            allEarnCoins: earnCoins.map(e => ({ id: e._id, amount: e.amount, status: e.status }))
        });
    } catch (error) {
        res.status(500).json({ message: 'Error checking balance', error });
    }
};

export const reStakeCoin = async (req: any, res: any) => {
    try {
        const userId = new mongoose.Types.ObjectId(req.body.userId);
        const amount = parseFloat(req.body.amount);
        
        console.log('ReStake Request:', { userId, amount });
        
        // Check if user has any previous deposit
        const isDeposit = await Deposit.findOne({ userId });
        
        if (isDeposit) {
            // Calculate available balance first - check both status true and all records
            const claimCoins = await Claim.find({ userId: userId });
            const earnCoins = await Earn.find({ userId: userId });
            
            // Filter active coins (status true or undefined)
            const activeClaimCoins = claimCoins.filter(coin => coin.status !== false);
            const activeEarnCoins = earnCoins.filter(coin => coin.status !== false);
            
            const totalClaimBalance = activeClaimCoins.reduce((sum, coin) => sum + coin.amount, 0);
            const totalEarnBalance = activeEarnCoins.reduce((sum, coin) => sum + coin.amount, 0);
            const totalAvailableBalance = totalClaimBalance + totalEarnBalance;
            
            console.log('Balance Check:', {
                totalClaimBalance,
                totalEarnBalance,
                totalAvailableBalance,
                requestedAmount: amount,
                claimCoinsCount: claimCoins.length,
                earnCoinsCount: earnCoins.length,
                claimCoins: claimCoins.map(c => ({ id: c._id, amount: c.amount, status: c.status })),
                earnCoins: earnCoins.map(e => ({ id: e._id, amount: e.amount, status: e.status }))
            });
            
            // Clamp amount to stake to avoid floating dust and ensure full stake when very close
            let amountToStake = amount;
            if (totalAvailableBalance < amountToStake) {
                return res.status(400).json({ 
                    message: 'Insufficient total reward balance in claim and earn coins',
                    available: totalAvailableBalance,
                    requested: amountToStake,
                    remaining: amountToStake - totalAvailableBalance
                });
            }
            // If difference is less than 0.01, stake full available
            if ((totalAvailableBalance - amountToStake) < 0.01) {
                amountToStake = totalAvailableBalance;
            }
            
            // Create new deposit entry
            req.body.transaction_Id = crypto.randomBytes(32).toString("hex");
            req.body.address = isDeposit.address;
            req.body.toAddress = isDeposit.toAddress;
            req.body.trcType = "TRC20";
            // Ensure proper types and amounts
            req.body.userId = userId; // store as ObjectId so $lookup works
            req.body.amount = amountToStake;
            
            const deposit = new Deposit(req.body);
            await deposit.save();
            
            // Update or create mine
            const mine = await Mine.findOne({ userId: deposit.userId });
            if (mine) {
                mine.amount += deposit.amount;
                mine.isStart = true;
                mine.startTime = new Date();
                await mine.save();
            } else {
                const newMine = new Mine({
                    userId: deposit.userId,
                    isStart: false,
                    amount: deposit.amount,
                });
                await newMine.save();
            }

            // Deduct from ClaimCoin first
            let remaining = amountToStake;
            
            for (const claim of activeClaimCoins) {
                if (remaining <= 0) break;

                const deductAmount = Math.min(remaining, claim.amount);
                claim.amount -= deductAmount;
                remaining -= deductAmount;

                if (claim.amount <= 0) {
                    claim.status = false;
                }

                await claim.save();
            }

            // If ClaimCoins are not enough, deduct from EarnCoin
            if (remaining > 0) {
                for (const earn of activeEarnCoins) {
                    if (remaining <= 0) break;

                    const deductAmount = Math.min(remaining, earn.amount);
                    earn.amount -= deductAmount;
                    remaining -= deductAmount;

                    if (earn.amount <= 0) {
                        earn.status = false;
                    }

                    await earn.save();
                }
            }

            // After deductions, if negligible remainder (< 0.01) persists due to floating fractions, zero it out
            if (remaining > 0 && remaining < 0.01) {
                remaining = 0;
            }

            // Clean up negligible dust balances (< $0.01) by zeroing and disabling
            for (const coin of [...activeClaimCoins, ...activeEarnCoins]) {
                if (coin.amount > 0 && coin.amount < 0.01) {
                    coin.amount = 0;
                    coin.status = false;
                    await coin.save();
                }
            }

            // Update user's aggregate depositAmount to reflect new stake consistently
            try {
                const mongoUser = await User.findById(userId);
                if (mongoUser) {
                    const deposits = await Deposit.find({ userId });
                    const sumDeposits = Number(deposits.reduce((s, d) => s + (Number(d.amount) || 0), 0).toFixed(2));
                    const override = Number(mongoUser.depositAmount || 0);
                    // Preserve admin override if it is higher; otherwise sync to actual sum
                    const nextValue = Math.max(override, sumDeposits);
                    mongoUser.depositAmount = nextValue;
                    await mongoUser.save();
                }
            } catch (e) {
                console.warn('Failed updating user.depositAmount after reStake', e);
            }

            res.status(200).json({ 
                message: 'Stake to mine successful', 
                deposit,
                stakedAmount: amountToStake,
                deductedFromClaim: totalClaimBalance,
                deductedFromEarn: totalEarnBalance
            });
        } else {
            res.status(400).json({ message: 'No previous deposit found. Please make a deposit first.' });
        }
    } catch (error) {
        console.error('ReStake Error:', error);
        res.status(500).json({ message: 'Error creating deposit', error });
    }
};





export const update = async (req: any, res: any) => {
    try {
        const { id } = req.params;
        const { username } = req.body;
        const user = await User.findById(id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        user.username = username || user.username;
        
        // Handle image upload with better validation
        if (req.file) {
            // Validate file type
            const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
            if (!allowedTypes.includes(req.file.mimetype)) {
                return res.status(400).json({ 
                    message: 'Invalid file type. Only JPEG, JPG, PNG, and GIF are allowed.' 
                });
            }
            
            // Validate file size (max 5MB)
            const maxSize = 5 * 1024 * 1024; // 5MB
            if (req.file.size > maxSize) {
                return res.status(400).json({ 
                    message: 'File too large. Maximum size is 5MB.' 
                });
            }
            
            // Delete old profile image if exists
            if (user.image) {
                const fs = require('fs');
                const path = require('path');
                const oldImagePath = path.join(__dirname, '../../uploads/profiles', path.basename(user.image));
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                }
            }
            
            // Update user with new image path (multer already saved the file)
            user.image = `/uploads/profiles/${req.file.filename}`;
        }
        
        await user.save();
        res.status(200).json({ 
            message: 'Profile updated successfully', 
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
                image: user.image
            }
        });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Server Error', error });
    }
};
