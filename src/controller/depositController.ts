import mongoose from "mongoose";
import Deposit from "../models/Deposit";
import Mine from "../models/Mine";


export const createDeposit = async (req: any, res: any) => {
    try {
        const amountReq = parseFloat(req.body.amount);
        const userId = new mongoose.Types.ObjectId(req.body.userId);
        const isFirstDeposit = await Deposit.countDocuments({ userId }) === 0;
        const bonus = isFirstDeposit ? amountReq * 0.05 : 0;
        const totalAmount = amountReq + bonus;
        req.body.amount = totalAmount;
        const deposit = new Deposit(req.body);
        const mine = await Mine.findOne({ userId: deposit.userId });
        await deposit.save();
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
        res.status(200).json({ message: 'Deposit created', deposit });
    } catch (error) {
        res.status(500).json({ message: 'Error creating deposit', error });
    }
};


export const getAllDeposits = async (_req: any, res: any) => {
    try {
        const deposits = await Deposit.find({}).populate('userId');
        res.status(200).json({ deposits });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching deposits', error });
    }
};


export const getAllDepositsByUser = async (req: any, res: any) => {
    try {
        const userId = new mongoose.Types.ObjectId(req.params.id);
        const deposits = await Deposit.find({ userId }).populate('userId');
        res.status(200).json({ deposits });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching deposits', error });
    }
};

export const getDepositById = async (req: any, res: any) => {
    try {
        const deposit = await Deposit.findById(req.params.id).populate('userId');
        if (!deposit) return res.status(404).json({ message: 'Deposit not found' });
        res.status(200).json({ deposit });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching deposit', error });
    }
};