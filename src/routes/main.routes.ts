import { Router } from 'express';
import UserRoute from './user.routes';
import ProfileRoute from './profile.routes';
import SimpleProfileRoute from './simpleProfile.routes';
import AdminRoute from './admin.routes';
import axios from 'axios';
import Deposit from '../models/Deposit';
import Mine from '../models/Mine';
import nodemailer from 'nodemailer'
import { createDeposit, getAllDeposits } from '../controller/depositController';
import { createWithdraw } from '../controller/authController';
import Claim from '../models/Claim';
import Earn from '../models/Earn';
import { getAllWithdraw } from '../controller/mineCoinController';
import Withdraw from '../models/Withdraw';
import User from '../models/User';
import mongoose from 'mongoose';
import Web3 from 'web3';


const web3 = new Web3('https://bsc-dataseed.binance.org/');



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






const MainRoute: Router = Router();

MainRoute.get("/", (req, res: any) => {
    return res.status(200).json({
        code: 200,
        server: "Server is running",
        status: true
    })
});
MainRoute.use("/user", UserRoute);
MainRoute.use("/profile", ProfileRoute);
MainRoute.use("/simple-profile", SimpleProfileRoute);
MainRoute.use("/admin", AdminRoute);

const walletAddress = 'TKauVzEFMJbtsSkfEYBrGxPQDGWGu1EQK8';


const checkTransaction = async (userId: any, transaction_id: any, res: any) => {
    try {
        const receipt = await web3.eth.getTransactionReceipt(transaction_id);
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
        const logs = receipt.logs.filter((log: any) => log.topics[0] === transferTopic);
        if (logs.length === 0) {
            console.log("❌ No BEP20 Transfer found in this transaction.");
            res.status(500).json({ message: 'Server Error', error: "No BEP20 Transfer found in this transaction." });
            return;
        }
        logs.forEach(async (log: any) => {
            if (!log.topics || log.topics.length < 3) return; // extra safety
            const from = '0x' + log.topics[1].slice(26);
            const to = '0x' + log.topics[2].slice(26);
            const value = web3.utils.fromWei(log?.data!, "ether");
            const verifyData = {
                transaction_id: transaction_id,
                to: to,
                from: from,
                block_timestamp: log.blockHash,
                type: 'USDT',
                amount: value,
            };
            const alreadyExists = await Deposit.findOne({ transaction_Id: transaction_id });
            if (alreadyExists) {
                console.log("🚫 Duplicate transaction - already processed.");
                return res.status(409).json({ message: "Duplicate transaction already recorded." });
            }
            const deposit = new Deposit({ transaction_Id: verifyData?.transaction_id, toAddress: verifyData?.to, address: verifyData?.from, trcType: "BEP20", amount: verifyData?.amount, userId: userId });
            const mine = await Mine.findOne({ userId: deposit.userId });
            if (mine) {
                mine.amount += parseFloat(value);
                mine.isStart = false;
                await mine.save();
            } else {
                const newMine = new Mine({
                    userId,
                    isStart: false,
                    amount: parseFloat(value),
                });
                await newMine.save();
            }
            await deposit.save();
        });
        return res.status(200).json({ message: 'Deposit Success' });
    } catch (err) {
        return res.status(500).json({ message: 'Server Error', error: err });
    }

}




MainRoute.post("/check/deposit", async (req: any, res: any) => {
    try {
        const { userId, transaction_id } = req.body;
        await checkTransaction(userId, transaction_id, res);
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

    } catch (error: any) {
        console.error('❌ Error checking deposits:', error.message);
        res.status(500).json({ message: 'Server Error', error });
    }
});




MainRoute.post('/send-email', async (req, res) => {
    const { username, email, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            host: 'mail.privateemail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'info@getminetreasure.com',
                pass: 'Nomi03173818',
            },
        });

        await transporter.sendMail({
            from: `"${username}" <${email}>`,
            to: 'info@getminetreasure.com',
            subject: 'New Contact Form Submission',
            html: `<p><strong>Name:</strong> ${username}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong><br/>${message}</p>`
        });

        res.json({ success: true });
    } catch (err) {
        console.error('Error sending email:', err);
        res.status(500).json({ success: false });
    }
});


MainRoute.get("/allDeposit", getAllDeposits);
MainRoute.get("/createWithdraw", createWithdraw);
MainRoute.post("/addDeposit", createDeposit);
MainRoute.get("/allWithdraw/:id", getAllWithdraw);

MainRoute.post("/addEarning", async (req: any, res: any) => {
    try {
        const claim = new Claim(req.body);
        await claim.save();
        res.status(200).json({ message: 'Add Earn Added', claim });
    } catch (error) {
        res.status(500).json({ message: 'Error creating deposit', error });
    }
});




MainRoute.get("/dashboard", async (req: any, res: any) => {
    try {
        const totalWithdraw = await Withdraw.aggregate([
            { $group: { _id: null, total: { $sum: "$amount" } } }
        ]);
        // Get total deposit amount
        const totalDeposit = await Deposit.aggregate([
            { $group: { _id: null, total: { $sum: "$amount" } } }
        ]);
        const withdrawAmount = totalWithdraw[0]?.total || 0;
        const depositAmount = totalDeposit[0]?.total || 0;;
        const user = await User.countDocuments({});
        const mine = await Mine.countDocuments({});

        res.status(200).json({ message: 'Add Earn Added', data: { withdraw: withdrawAmount, user, deposit: depositAmount, mine } });
    } catch (error) {
        res.status(500).json({ message: 'Error creating deposit', error });
    }
});

MainRoute.get("/withdrawAccept/:id", async (req: any, res: any) => {
    try {
        const withdraw = await Withdraw.findById(req.params.id);
        if (withdraw) {
            withdraw.statusWithdraw = "approve";
            await withdraw.save();
            res.status(200).json({ message: 'Accept Withdraw Success', withdraw });
        } else {
            res.status(404).json({ message: 'No Withdraw Found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error creating deposit', error });
    }
});

MainRoute.get("/withdrawCancel/:id", async (req: any, res: any) => {
    try {
        const withdraw = await Withdraw.findById(req.params.id);
        if (withdraw) {
            // Only allow cancellation if status is pending
            if (withdraw.statusWithdraw !== "pending") {
                return res.status(400).json({ message: 'Can only cancel pending withdrawals' });
            }
            
            // Get user to update their balance
            const user = await User.findById(withdraw.userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Calculate the amount to return based on withdrawal type
            let amountToReturn = withdraw.amount;
            
            if (withdraw.type === "all") {
                // For total withdraw, return the amount after deducting 10% fee
                amountToReturn = withdraw.amount - (withdraw.amount * 0.10);
            } else {
                // For earn withdraw, return the amount after deducting $1 fee
                amountToReturn = withdraw.amount - 1;
            }

            // Update user's balance based on withdrawal type
            if (withdraw.type === "reward") {
                // For earn withdraw, add to earnCoin (same as original deduction)
                const earnCoin = new Earn({
                    userId: user._id,
                    amount: amountToReturn,
                    date: new Date(),
                    status: true
                });
                await earnCoin.save();
            } else {
                // For total withdraw, add to claimCoin (same as original deduction)
                const claimCoin = new Claim({
                    userId: user._id,
                    amount: amountToReturn,
                    date: new Date(),
                    status: true
                });
                await claimCoin.save();
            }

            // Update withdrawal status
            withdraw.statusWithdraw = "cancelled";
            withdraw.reason = "Cancelled by user";
            await withdraw.save();
            
            res.status(200).json({ 
                message: 'Withdrawal cancelled successfully and amount returned to balance', 
                withdraw,
                returnedAmount: amountToReturn
            });
        } else {
            res.status(404).json({ message: 'No Withdraw Found' });
        }
    } catch (error) {
        console.error('Cancel withdrawal error:', error);
        res.status(500).json({ message: 'Error cancelling withdrawal', error });
    }
});


MainRoute.get("/allWithdraw", async (req: any, res: any) => {
    try {
        const withdraw = await Withdraw.find({});
        res.status(200).json({ message: 'Fetch Withdraw Success', data: withdraw });
    } catch (error) {
        res.status(500).json({ message: 'Error creating deposit', error });
    }
});


MainRoute.get("/allMine", async (req: any, res: any) => {
    try {
        const withdraw = await Mine.find({});
        res.status(200).json({ message: 'Fetch Withdraw Success', data: withdraw });
    } catch (error) {
        res.status(500).json({ message: 'Error creating deposit', error });
    }
});



MainRoute.get("/show-referral/:id", async (req: any, res: any) => {
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
    } catch (error) {
        console.error('Aggregation error:', error);
        res.status(500).json({ message: 'Server Error', error });
    }
});
export default MainRoute;