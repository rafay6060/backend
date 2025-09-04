"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.reStakeCoin = exports.createWithdraw = exports.updatePassword = exports.sendMailOtp = exports.getAllUser = exports.getUserById = exports.login = exports.verifyOtp = exports.sentOtp = exports.register = exports.updateReferralProgress = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const crypto_1 = __importDefault(require("crypto"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mongoose_1 = __importDefault(require("mongoose"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const tempOtp_1 = require("../models/tempOtp");
const User_1 = __importDefault(require("../models/User"));
const Wallet_1 = __importDefault(require("../models/Wallet"));
const Withdraw_1 = __importDefault(require("../models/Withdraw"));
const apiCheckDeposit_1 = require("../utils/apiCheckDeposit");
const Claim_1 = __importDefault(require("../models/Claim"));
const Deposit_1 = __importDefault(require("../models/Deposit"));
const Mine_1 = __importDefault(require("../models/Mine"));
const Earn_1 = __importDefault(require("../models/Earn"));
const ReferralProgress_1 = __importDefault(require("../models/ReferralProgress"));
const levelCriteria = {
    1: 3, // Level 1 unlocked by default
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
const updateReferralProgress = (userId, referredUserId) => __awaiter(void 0, void 0, void 0, function* () {
    const objectId = new mongoose_1.default.Types.ObjectId(referredUserId);
    const userObjectId = new mongoose_1.default.Types.ObjectId(userId);
    for (let level = 1; level <= 6; level++) {
        const requiredCount = levelCriteria[level];
        let progress = yield ReferralProgress_1.default.findOne({ userId: userObjectId, level });
        if (!progress) {
            progress = yield ReferralProgress_1.default.create({
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
            const prevLevel = yield ReferralProgress_1.default.findOne({ userId: userObjectId, level: level - 1 });
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
                    progress.unlocked = true;
                }
                yield progress.save();
                break; // Stop after adding to one level
            }
        }
    }
});
exports.updateReferralProgress = updateReferralProgress;
// Helper to check if previous level is unlocked
const isPreviousLevelUnlocked = (userId, currentLevel) => __awaiter(void 0, void 0, void 0, function* () {
    if (currentLevel <= 1)
        return true; // Level 1 is always unlocked by default
    const prev = yield ReferralProgress_1.default.findOne({ userId, level: currentLevel - 1 });
    return !!(prev && prev.unlocked);
});
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
const sendOtpMail = (email, otp) => __awaiter(void 0, void 0, void 0, function* () {
    const transporter = nodemailer_1.default.createTransport({
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
        const info = yield transporter.sendMail(mailOptions);
        console.log('OTP mail sent:', info.response);
    }
    catch (error) {
        console.error('Error sending OTP mail:', error);
    }
});
const generateReferralCode = (username) => {
    const cleanUsername = username.trim().replace(/\s+/g, '').toLowerCase(); // Remove spaces and make lowercase
    return `${cleanUsername}${Math.floor(1000 + Math.random() * 9000)}`;
};
const generateUID = () => {
    return crypto_1.default.randomBytes(8).toString('hex'); // 8 bytes = 16 hex characters
};
const generateUniqueField = (fieldName, generator) => __awaiter(void 0, void 0, void 0, function* () {
    let unique = false;
    let value = '';
    while (!unique) {
        value = generator();
        const exists = yield User_1.default.findOne({ [fieldName]: value });
        if (!exists)
            unique = true;
    }
    return value;
});
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, number, password, referredBy } = req.body;
        const existingUser = yield User_1.default.findOne({ email });
        if (existingUser)
            return res.status(400).json({ message: 'Email already registered' });
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const otp = generateOtp();
        const uid = yield generateUniqueField('uid', generateUID);
        const referralCode = yield generateUniqueField('referralCode', () => generateReferralCode(username));
        const refUser = yield User_1.default.findOne({ referralCode: referredBy });
        const newUser = new User_1.default({
            username,
            uid,
            email,
            number,
            password: hashedPassword,
            plainPassword: password,
            mailOtp: otp,
            referralCode,
            referredBy: refUser === null || refUser === void 0 ? void 0 : refUser._id
        });
        // await sendOtpMail(email, otp);
        if (refUser) {
            // let current: any = refUser;
            // for (let level = 1; level <= 6 && current; level++) {
            //     await updateReferralProgress(current?._id!.toString(), current?._id!.toString());
            //     if (!current?.referredBy) break;
            //     current = await User.findById(current.referredBy);
            // }
            yield (0, exports.updateReferralProgress)(refUser === null || refUser === void 0 ? void 0 : refUser._id.toString(), newUser === null || newUser === void 0 ? void 0 : newUser._id.toString());
        }
        const account = yield (0, apiCheckDeposit_1.createAddress)();
        const wallet = new Wallet_1.default({ userId: newUser === null || newUser === void 0 ? void 0 : newUser._id, privateKey: account === null || account === void 0 ? void 0 : account.privateKey, publicKey: account.address.base58, type: "USDT" });
        yield newUser.save();
        yield wallet.save();
        res.status(200).json({ message: 'User registered' });
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});
exports.register = register;
const sentOtp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        if (!email)
            return res.status(400).json({ message: 'Please Pass Email' });
        const otp = generateOtp();
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
        yield tempOtp_1.OtpModel.deleteMany({ email });
        yield tempOtp_1.OtpModel.create({ email, otp, expiresAt });
        yield sendOtpMail(email, otp);
        res.status(200).json({ message: "Sent Otp Success" });
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});
exports.sentOtp = sentOtp;
const verifyOtp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, otp } = req.body;
        const record = yield tempOtp_1.OtpModel.findOne({ email, otp });
        if (!record) {
            return res.status(400).json({ message: 'Your Otp Email Not Valid' });
        }
        if (record.expiresAt < new Date()) {
            return res.status(400).json({ message: 'Your OTP expired' });
        }
        res.status(200).json({ message: "Verify Success" });
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});
exports.verifyOtp = verifyOtp;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user = yield User_1.default.findOne({ $or: [{ email: username }, { username: username }] });
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        const isMatch = yield bcryptjs_1.default.compare(password, user.password);
        if (!isMatch)
            return res.status(401).json({ message: 'Invalid credentials' });
        const token = jsonwebtoken_1.default.sign({ id: user._id }, 'sdfhsdgfkuyjgfhiwewhr7345t478y45h743gf6734g45');
        res.status(200).json({ token, user, message: "User Login Success" });
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});
exports.login = login;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = new mongoose_1.default.Types.ObjectId(req.params.id);
        const user = yield User_1.default.aggregate([
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
        const referralUser = yield User_1.default.aggregate([
            { $match: { referredBy: (_a = user[0]) === null || _a === void 0 ? void 0 : _a._id.toString() } },
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
    }
    catch (error) {
        console.error('Aggregation error:', error);
        res.status(500).json({ message: 'Server Error', error });
    }
});
exports.getUserById = getUserById;
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.aggregate([
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
    }
    catch (error) {
        console.error('Aggregation error:', error);
        res.status(500).json({ message: 'Server Error', error });
    }
});
exports.getAllUser = getAllUser;
const sendMailOtp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ message: 'email is required' });
        }
        const user = yield User_1.default.findOne({ email: email });
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        const otp = generateOtp();
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
        yield tempOtp_1.OtpModel.deleteMany({ email });
        yield tempOtp_1.OtpModel.create({ email, otp, expiresAt });
        yield sendOtpMail(email, otp);
        res.status(200).json({ message: "Sent Otp Success" });
    }
    catch (error) {
        console.error('Aggregation error:', error);
        res.status(500).json({ message: 'Server Error', error });
    }
});
exports.sendMailOtp = sendMailOtp;
const updatePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, cPassword, otpCode } = req.body;
        const existingUser = yield User_1.default.findOne({ email });
        if (!existingUser)
            return res.status(404).json({ message: 'User Not Fund' });
        const record = yield tempOtp_1.OtpModel.findOne({ email, otp: otpCode });
        if (!record) {
            return res.status(400).json({ message: 'Your Otp Email Not Valid' });
        }
        if (record.expiresAt < new Date()) {
            return res.status(400).json({ message: 'Your OTP expired' });
        }
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        existingUser.password = hashedPassword;
        existingUser.plainPassword = cPassword;
        yield existingUser.save();
        res.status(200).json({ message: "Update Password Success" });
    }
    catch (error) {
        console.error('Aggregation error:', error);
        res.status(500).json({ message: 'Server Error', error });
    }
});
exports.updatePassword = updatePassword;
const createWithdraw = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { amount, address, date, type, userId } = req.body;
        const user = yield User_1.default.findById(userId);
        if (!user) {
            return res.status(400).json({ message: 'User not founded' });
        }
        const wallet = yield Wallet_1.default.findOne({ userId: user === null || user === void 0 ? void 0 : user._id });
        if (wallet) {
            const am = wallet.amount;
            wallet.amount = am - parseInt(amount);
            yield wallet.save();
        }
        if (type === 'reward') {
            let remaining = parseFloat(amount);
            const claimCoins = yield Claim_1.default.find({ userId: user._id, status: true }).sort({ date: 1 });
            for (const claim of claimCoins) {
                if (remaining <= 0)
                    break;
                const deductAmount = Math.min(remaining, claim.amount);
                claim.amount -= deductAmount;
                remaining -= deductAmount;
                // Mark claimCoin as inactive if fully used
                if (claim.amount <= 0) {
                    claim.status = false;
                }
                yield claim.save();
            }
            if (remaining > 0) {
                return res.status(400).json({ message: 'Insufficient reward balance in claim coins' });
            }
            const mine = yield Mine_1.default.findOne({ userId: user === null || user === void 0 ? void 0 : user.id });
            if (mine) {
                const decrementAmount = parseFloat(amount);
                // mine.amount = Math.max(0, (mine.amount || 0) - decrementAmount); // prevent negative amounts
                mine.isStart = false;
                mine.startTime = new Date();
                yield mine.save();
            }
        }
        else {
            let remaining = parseFloat(amount);
            const claimCoins1 = yield Deposit_1.default.find({ userId: user._id, status: false }).sort({ date: 1 });
            for (const claim of claimCoins1) {
                if (remaining <= 0)
                    break;
                const deductAmount = Math.min(remaining, claim.amount);
                claim.amount -= deductAmount;
                remaining -= deductAmount;
                if (claim.amount <= 0) {
                    claim.status = false;
                }
                yield claim.save();
            }
            if (remaining > 0) {
                return res.status(400).json({ message: 'Insufficient reward balance in claim coins' });
            }
            const mine = yield Mine_1.default.findOne({ userId: user === null || user === void 0 ? void 0 : user.id });
            if (mine) {
                const decrementAmount = parseFloat(amount);
                mine.amount = Math.max(0, (mine.amount || 0) - decrementAmount); // prevent negative amounts
                mine.isStart = false;
                mine.startTime = new Date();
                yield mine.save();
            }
        }
        const withdraw = new Withdraw_1.default({
            userId: userId,
            type,
            address,
            amount,
            date,
        });
        yield withdraw.save();
        res.status(200).json({ message: "Create Withdraw Success" });
    }
    catch (error) {
        console.error('Aggregation error:', error);
        res.status(500).json({ message: 'Server Error', error });
    }
});
exports.createWithdraw = createWithdraw;
const reStakeCoin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = new mongoose_1.default.Types.ObjectId(req.body.userId);
        const isDeposit = yield Deposit_1.default.findOne({ userId });
        if (isDeposit) {
            // const tId = isDeposit?.transaction_Id;
            // req.body.transaction_Id = tId;
            req.body.transaction_Id = crypto_1.default.randomBytes(32).toString("hex"); // 64-char hex ID
            req.body.address = isDeposit.address;
            req.body.toAddress = isDeposit.toAddress;
            req.body.trcType = "TRC20";
            const deposit = new Deposit_1.default(req.body);
            const mine = yield Mine_1.default.findOne({ userId: deposit.userId });
            yield deposit.save();
            if (mine) {
                mine.amount += deposit.amount;
                mine.isStart = true;
                mine.startTime = new Date();
                yield mine.save();
            }
            else {
                const newMine = new Mine_1.default({
                    userId: deposit.userId,
                    isStart: false,
                    amount: deposit.amount,
                });
                yield newMine.save();
            }
            // let remaining = parseFloat(req.body?.amount);
            // const claimCoins = await Claim.find({ userId: userId, status: true }).sort({ date: 1 });
            // for (const claim of claimCoins) {
            //     if (remaining <= 0) break;
            //     const deductAmount = Math.min(remaining, claim.amount);
            //     claim.amount -= deductAmount;
            //     remaining -= deductAmount;
            //     // Mark claimCoin as inactive if fully used
            //     if (claim.amount <= 0) {
            //         claim.status = false;
            //     }
            //     await claim.save();
            // }
            // if (remaining > 0) {
            //     return res.status(400).json({ message: 'Insufficient reward balance in claim coins' });
            // }
            let remaining = parseFloat((_a = req.body) === null || _a === void 0 ? void 0 : _a.amount);
            // Step 1: Try to deduct from ClaimCoin
            const claimCoins = yield Claim_1.default.find({ userId: userId, status: true }).sort({ date: 1 });
            for (const claim of claimCoins) {
                if (remaining <= 0)
                    break;
                const deductAmount = Math.min(remaining, claim.amount);
                claim.amount -= deductAmount;
                remaining -= deductAmount;
                if (claim.amount <= 0) {
                    claim.status = false;
                }
                yield claim.save();
            }
            // Step 2: If ClaimCoins are not enough, use EarnCoin
            if (remaining > 0) {
                const earnCoins = yield Earn_1.default.find({ userId: userId, status: true }).sort({ date: 1 });
                for (const earn of earnCoins) {
                    if (remaining <= 0)
                        break;
                    const deductAmount = Math.min(remaining, earn.amount);
                    earn.amount -= deductAmount;
                    remaining -= deductAmount;
                    if (earn.amount <= 0) {
                        earn.status = false;
                    }
                    yield earn.save();
                }
            }
            // Step 3: Final check
            if (remaining > 0) {
                return res.status(400).json({ message: 'Insufficient total reward balance in claim and earn coins' });
            }
            res.status(200).json({ message: 'Deposit created', deposit });
        }
        else {
            res.status(400).json({ message: 'ReStake Deposit coins' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating deposit', error });
    }
});
exports.reStakeCoin = reStakeCoin;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { username } = req.body;
        const user = yield User_1.default.findById(id);
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        user.username = username || user.username;
        // Handle image upload
        if (req.file) {
            user.image = `/uploads/profiles/${req.file.filename}`; // or full URL if hosting
        }
        yield user.save();
        res.status(200).json({ message: 'User updated successfully', user });
    }
    catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Server Error', error });
    }
});
exports.update = update;
