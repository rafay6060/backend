import mongoose from "mongoose";
import Mine from "../models/Mine";
import Claim from "../models/Claim";
import EarnCoin from '../models/Earn';
import User from "../models/User";
import Withdraw from "../models/Withdraw";


export const createMineCoin = async (req: any, res: any) => {
    try {
        const { userId, isStart, amount, startTime } = req.body;

        const newMine = new Mine({
            userId,
            isStart,
            amount,
            startTime,
        });
        const saved = await newMine.save();
        res.status(201).json({ message: 'Mine coin entry created', data: saved });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
export const startMine = async (req: any, res: any) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid ID format' });
        }
        const updatedMine = await Mine.findByIdAndUpdate(
            id,
            {
                isStart: true,
                startTime: new Date(),
            },
            { new: true } // return updated document
        );
        if (!updatedMine) {
            return res.status(404).json({ message: 'MineCoin not found' });
        }
        res.status(200).json({ message: 'Mining started', data: updatedMine });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};




export const claim = async (req: any, res: any) => {
    try {
        const { userId, mineId } = req.body;
        if (!mongoose.Types.ObjectId.isValid(mineId)) {
            return res.status(400).json({ message: 'Invalid ID format' });
        }
        
        const isExitUser = await User.findById(userId);
        if (!isExitUser) {
            return res.status(404).json({ message: 'User Not Founded' });
        }
        
        const mine = await Mine.findById(mineId);
        if (!mine) {
            return res.status(404).json({ message: 'Mine Not Founded' });
        }

        // Check if mining is started
        if (!mine.isStart) {
            return res.status(400).json({ message: 'Mining not started yet' });
        }

        // Check if 24 hours have passed
        const startTime = new Date(mine.startTime).getTime();
        const now = Date.now();
        const timeDiff = now - startTime;
        const hoursDiff = timeDiff / (1000 * 60 * 60);

        if (hoursDiff < 24) {
            return res.status(400).json({ 
                message: '24 hours not completed yet', 
                remainingHours: 24 - hoursDiff 
            });
        }

        // Check if already claimed
        const existingClaim = await Claim.findOne({ 
            userId: userId, 
            mineId: mineId 
        });
        
        if (existingClaim) {
            return res.status(400).json({ message: 'Already claimed for this mining cycle' });
        }

        const amount = mine.amount;
        const onePercent = parseFloat((amount * 0.01).toFixed(2));
        const zeroPointFivePer = amount * 0.005;
        
        const claimAmount = new Claim({
            userId,
            mineId,
            amount: onePercent
        });

        if (isExitUser.referredBy) {
            const isRefUser = await User.find({ referredBy: isExitUser.referredBy });
            if (isRefUser.length > 0) {
                const earnAmount = new EarnCoin({
                    userId: isExitUser.referredBy,
                    amount: zeroPointFivePer
                });
                await earnAmount.save();
            }
        }

        // Reset mine for next cycle
        mine.status = true;
        mine.isStart = false;
        mine.startTime = new Date();
        await mine.save();
        await claimAmount.save();
        
        res.status(200).json({ message: 'Claim successful', data: claimAmount });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}


export const getAllWithdraw = async (req: any, res: any) => {
    try {
        const userId = new mongoose.Types.ObjectId(req.params.id);
        const allWithdraw = await Withdraw.aggregate([
            {
                $match: { userId: userId }
            },
            {
                $lookup: {
                    from: 'users', // collection name in MongoDB (lowercase and plural)
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'user'
                }
            },
        ]);
        res.status(200).json({ message: 'Mining started', data: allWithdraw });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}