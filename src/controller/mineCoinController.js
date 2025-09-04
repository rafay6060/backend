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
exports.getAllWithdraw = exports.claim = exports.startMine = exports.createMineCoin = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Mine_1 = __importDefault(require("../models/Mine"));
const Claim_1 = __importDefault(require("../models/Claim"));
const Earn_1 = __importDefault(require("../models/Earn"));
const User_1 = __importDefault(require("../models/User"));
const Withdraw_1 = __importDefault(require("../models/Withdraw"));
const createMineCoin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, isStart, amount, startTime } = req.body;
        const newMine = new Mine_1.default({
            userId,
            isStart,
            amount,
            startTime,
        });
        const saved = yield newMine.save();
        res.status(201).json({ message: 'Mine coin entry created', data: saved });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.createMineCoin = createMineCoin;
const startMine = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid ID format' });
        }
        const updatedMine = yield Mine_1.default.findByIdAndUpdate(id, {
            isStart: true,
            startTime: new Date(),
        }, { new: true } // return updated document
        );
        if (!updatedMine) {
            return res.status(404).json({ message: 'MineCoin not found' });
        }
        res.status(200).json({ message: 'Mining started', data: updatedMine });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.startMine = startMine;
const claim = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, mineId } = req.body;
        if (!mongoose_1.default.Types.ObjectId.isValid(mineId)) {
            return res.status(400).json({ message: 'Invalid ID format' });
        }
        const isExitUser = yield User_1.default.findById(userId);
        if (!isExitUser) {
            return res.status(404).json({ message: 'User Not Founded' });
        }
        const mine = yield Mine_1.default.findById(mineId);
        if (!mine) {
            return res.status(404).json({ message: 'Mine Not Founded' });
        }
        const amount = mine.amount;
        const onePercent = parseFloat((amount * 0.01).toFixed(2));
        const zeroPointFivePer = amount * 0.005;
        console.log(zeroPointFivePer);
        const claimAmount = new Claim_1.default({
            userId,
            amount: onePercent
        });
        if (isExitUser.referredBy) {
            const isRefUser = yield User_1.default.find({ referredBy: isExitUser.referredBy });
            if (isRefUser.length > 0) {
                const earnAmount = new Earn_1.default({
                    userId: isExitUser.referredBy,
                    amount: zeroPointFivePer
                });
                yield earnAmount.save();
            }
        }
        mine.status = true;
        mine.isStart = false;
        mine.startTime = new Date();
        yield mine.save();
        yield claimAmount.save();
        res.status(200).json({ message: 'Mining started', data: claimAmount });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.claim = claim;
const getAllWithdraw = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = new mongoose_1.default.Types.ObjectId(req.params.id);
        const allWithdraw = yield Withdraw_1.default.aggregate([
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
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.getAllWithdraw = getAllWithdraw;
