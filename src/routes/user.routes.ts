import { Router } from 'express';
import { createWithdraw, getAllUser, getUserById,update, login, register,reStakeCoin,sendMailOtp,sentOtp, updatePassword, verifyOtp, checkBalance } from '../controller/authController';
import { claim, startMine } from '../controller/mineCoinController';
import { getAllDepositsByUser } from '../controller/depositController';
import Withdraw from '../models/Withdraw';
import User from '../models/User';
import Claim from '../models/Claim';
import Earn from '../models/Earn';

import multer from 'multer';
import path from 'path';
import fs from 'fs';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = 'uploads/profiles/';
        // Create directory if it doesn't exist
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        // Get the original file extension
        const originalExt = path.extname(file.originalname);
        // Get the MIME type extension as fallback
        const mimeExt = file.mimetype.split('/')[1];
        // Use original extension if available, otherwise use MIME type extension
        const ext = originalExt || `.${mimeExt}`;
        
        // Create filename with timestamp and proper extension
        const filename = `profile_${Date.now()}${ext}`;
        cb(null, filename);
    }
});


const fileFilter = (req: any, file: any, cb: any) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Only image files are allowed!'), false);
    }
};

export const upload = multer({ storage, fileFilter });



const UserRoute = Router();


UserRoute.post('/register',register);
UserRoute.post('/login',login);
UserRoute.post('/sentOtp',sentOtp);
UserRoute.post('/verifyOtp',verifyOtp);
UserRoute.get("/byId/:id",getUserById);
UserRoute.get("/startMine/:id",startMine);
UserRoute.post("/claim",claim);
UserRoute.get("/depositById/:id",getAllDepositsByUser);
UserRoute.post("/mailVerify",sendMailOtp);
UserRoute.post("/updatePassword",updatePassword);
UserRoute.get("/getAllUser",getAllUser)
UserRoute.post("/withdraw",createWithdraw);
UserRoute.get("/withdrawCancel/:id", async (req: any, res: any) => {
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
UserRoute.post("/reStake",reStakeCoin);
UserRoute.get("/balance/:userId",checkBalance);
UserRoute.patch('/update/:id', upload.single('image'),update);






export default UserRoute;