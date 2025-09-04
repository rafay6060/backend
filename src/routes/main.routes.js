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
const express_1 = require("express");
const user_routes_1 = __importDefault(require("./user.routes"));
const Deposit_1 = __importDefault(require("../models/Deposit"));
const Mine_1 = __importDefault(require("../models/Mine"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const depositController_1 = require("../controller/depositController");
const authController_1 = require("../controller/authController");
const Claim_1 = __importDefault(require("../models/Claim"));
const mineCoinController_1 = require("../controller/mineCoinController");
const Withdraw_1 = __importDefault(require("../models/Withdraw"));
const User_1 = __importDefault(require("../models/User"));
const mongoose_1 = __importDefault(require("mongoose"));
const web3_1 = __importDefault(require("web3"));
const web3 = new web3_1.default('https://bsc-dataseed.binance.org/');
// const TOKEN_ADDRESS = '0xe9e7cea3dedca5984780bafc599bd69add087d56'; // BUSD
const minABI = [
    {
        anonymous: false,
        inputs: [
            { indexed: true, name: "from", type: "address" },
            { indexed: true, name: "to", type: "address" },
            { indexed: false, name: "value", type: "uint256" },
        ],
        name: "Transfer",
        type: "event"
    }
];
const MainRoute = (0, express_1.Router)();
MainRoute.get("/", (req, res) => {
    return res.status(200).json({
        code: 200,
        server: "Server is running",
        status: true
    });
});
MainRoute.use("/user", user_routes_1.default);
const walletAddress = 'TKauVzEFMJbtsSkfEYBrGxPQDGWGu1EQK8';
const checkTransaction = (userId, transaction_id, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const receipt = yield web3.eth.getTransactionReceipt(transaction_id);
        if (!receipt) {
            console.log("Transaction not yet mined.");
            res.status(500).json({ message: 'Server Error', error: "Transaction not yet mined" });
            return;
        }
        if (!receipt.status) {
            console.log("❌ Transaction failed.");
            res.status(500).json({ message: 'Server Error', error: "Transaction failed." });
            return;
        }
        const transferTopic = web3.utils.sha3("Transfer(address,address,uint256)");
        const logs = receipt.logs.filter((log) => log.topics[0] === transferTopic);
        if (logs.length === 0) {
            console.log("❌ No BEP20 Transfer found in this transaction.");
            res.status(500).json({ message: 'Server Error', error: "No BEP20 Transfer found in this transaction." });
            return;
        }
        logs.forEach((log) => __awaiter(void 0, void 0, void 0, function* () {
            if (!log.topics || log.topics.length < 3)
                return; // extra safety
            const from = '0x' + log.topics[1].slice(26);
            const to = '0x' + log.topics[2].slice(26);
            const value = web3.utils.fromWei(log === null || log === void 0 ? void 0 : log.data, "ether");
            const verifyData = {
                transaction_id: transaction_id,
                to: to,
                from: from,
                block_timestamp: log.blockHash,
                type: 'USDT',
                amount: value,
            };
            const alreadyExists = yield Deposit_1.default.findOne({ transaction_Id: transaction_id });
            if (alreadyExists) {
                console.log("🚫 Duplicate transaction - already processed.");
                return res.status(409).json({ message: "Duplicate transaction already recorded." });
            }
            const deposit = new Deposit_1.default({ transaction_Id: verifyData === null || verifyData === void 0 ? void 0 : verifyData.transaction_id, toAddress: verifyData === null || verifyData === void 0 ? void 0 : verifyData.to, address: verifyData === null || verifyData === void 0 ? void 0 : verifyData.from, trcType: "BEP20", amount: verifyData === null || verifyData === void 0 ? void 0 : verifyData.amount, userId: userId });
            const mine = yield Mine_1.default.findOne({ userId: deposit.userId });
            if (mine) {
                mine.amount += parseFloat(value);
                mine.isStart = false;
                yield mine.save();
            }
            else {
                const newMine = new Mine_1.default({
                    userId,
                    isStart: false,
                    amount: parseFloat(value),
                });
                yield newMine.save();
            }
            yield deposit.save();
        }));
        return res.status(200).json({ message: 'Deposit Success' });
    }
    catch (err) {
        return res.status(500).json({ message: 'Server Error', error: err });
    }
});
MainRoute.post("/check/deposit", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, transaction_id } = req.body;
        yield checkTransaction(userId, transaction_id, res);
        // const url = `https://api.trongrid.io/v1/accounts/${walletAddress}/transactions/trc20`;
        // const response = await axios.get(url);
        // if (!response.data || !response.data.data || response.data.data.length === 0) return res.status(400).json({ message: 'No Transaction Founded' });;
        // const txList = response.data.data;
        // const newTxs = txList;
        // for (const tx of newTxs) {
        //     console.log(tx.transaction_id, transaction_id);
        //     const isIncoming = tx.transaction_id == transaction_id;
        //     const decimals = parseInt(tx.token_info?.decimals || '6');
        //     const amount = parseFloat(tx.value) / Math.pow(10, decimals);
        //     if (isIncoming && amount > 0) {
        //         const userId1 = new mongoose.Types.ObjectId(req.body.userId);
        //         const isFirstDeposit = await Deposit.countDocuments({ userId: userId1 }) === 0;
        //         const bonus = isFirstDeposit ? amount * 0.05 : 0;
        //         const totalAmount = amount + bonus;
        //         console.log(`\u{1F4B0} Received ${amount} ${tx.token_info.symbol} from ${tx.from}`);
        //         const verifyData = {
        //             transaction_id: tx.transaction_id,
        //             to: tx.to,
        //             from: tx.from,
        //             block_timestamp: tx.block_timestamp,
        //             type: 'USDT',
        //             amount: totalAmount,
        //         };
        //         const deposit = new Deposit({ transaction_Id: verifyData?.transaction_id, toAddress: verifyData?.to, address: verifyData?.from, trcType: "TRC20", amount: verifyData?.amount, userId: userId });
        //         const mine = await Mine.findOne({ userId: deposit.userId });
        //         if (mine) {
        //             mine.amount += amount;
        //             mine.isStart = false;
        //             await mine.save();
        //         } else {
        //             const newMine = new Mine({
        //                 userId,
        //                 isStart: false,
        //                 amount,
        //             });
        //             await newMine.save();
        //         }
        //         await deposit.save();
        //         console.log("Transaction Save Success")
        //     }
        // }
        // const contract = new web3.eth.Contract(minABI, TOKEN_ADDRESS);
        // contract.events.Transfer({ fromBlock: 'latest' })
        //     .on('data', event => {
        //         const { from, to, value }: any = event.returnValues;
        //         if (to.toLowerCase() == "TEPSrSYPDSQ7yXpMFPq91Fb1QEWpMkRGfn") {
        //             const amount = web3.utils.fromWei(value, 'ether');
        //             console.log(`✅ Received ${amount} tokens from ${from}`);
        //         }
        //     });
    }
    catch (error) {
        console.error('❌ Error checking deposits:', error.message);
        res.status(500).json({ message: 'Server Error', error });
    }
}));
MainRoute.post('/send-email', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, message } = req.body;
    try {
        const transporter = nodemailer_1.default.createTransport({
            host: 'mail.privateemail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'info@getminetreasure.com',
                pass: 'Nomi03173818',
            },
        });
        yield transporter.sendMail({
            from: `"${username}" <${email}>`,
            to: 'info@getminetreasure.com',
            subject: 'New Contact Form Submission',
            html: `<p><strong>Name:</strong> ${username}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong><br/>${message}</p>`
        });
        res.json({ success: true });
    }
    catch (err) {
        console.error('Error sending email:', err);
        res.status(500).json({ success: false });
    }
}));
MainRoute.get("/allDeposit", depositController_1.getAllDeposits);
MainRoute.get("/createWithdraw", authController_1.createWithdraw);
MainRoute.post("/addDeposit", depositController_1.createDeposit);
MainRoute.get("/allWithdraw/:id", mineCoinController_1.getAllWithdraw);
MainRoute.post("/addEarning", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const claim = new Claim_1.default(req.body);
        yield claim.save();
        res.status(200).json({ message: 'Add Earn Added', claim });
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating deposit', error });
    }
}));
MainRoute.get("/dashboard", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const totalWithdraw = yield Withdraw_1.default.aggregate([
            { $group: { _id: null, total: { $sum: "$amount" } } }
        ]);
        // Get total deposit amount
        const totalDeposit = yield Deposit_1.default.aggregate([
            { $group: { _id: null, total: { $sum: "$amount" } } }
        ]);
        const withdrawAmount = ((_a = totalWithdraw[0]) === null || _a === void 0 ? void 0 : _a.total) || 0;
        const depositAmount = ((_b = totalDeposit[0]) === null || _b === void 0 ? void 0 : _b.total) || 0;
        ;
        const user = yield User_1.default.countDocuments({});
        const mine = yield Mine_1.default.countDocuments({});
        res.status(200).json({ message: 'Add Earn Added', data: { withdraw: withdrawAmount, user, deposit: depositAmount, mine } });
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating deposit', error });
    }
}));
MainRoute.get("/withdrawAccept/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const withdraw = yield Withdraw_1.default.findById(req.params.id);
        if (withdraw) {
            withdraw.statusWithdraw = "approve";
            yield withdraw.save();
            res.status(200).json({ message: 'Accept Withdraw Success', withdraw });
        }
        else {
            res.status(404).json({ message: 'No Withdraw Found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating deposit', error });
    }
}));
MainRoute.get("/allWithdraw", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const withdraw = yield Withdraw_1.default.find({});
        res.status(200).json({ message: 'Fetch Withdraw Success', data: withdraw });
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating deposit', error });
    }
}));
MainRoute.get("/allMine", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const withdraw = yield Mine_1.default.find({});
        res.status(200).json({ message: 'Fetch Withdraw Success', data: withdraw });
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating deposit', error });
    }
}));
MainRoute.get("/show-referral/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        res.status(200).json({ user: user[0], message: 'User Fetch Success' });
    }
    catch (error) {
        console.error('Aggregation error:', error);
        res.status(500).json({ message: 'Server Error', error });
    }
}));
exports.default = MainRoute;
