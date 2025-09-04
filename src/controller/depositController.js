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
exports.getDepositById = exports.getAllDepositsByUser = exports.getAllDeposits = exports.createDeposit = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Deposit_1 = __importDefault(require("../models/Deposit"));
const Mine_1 = __importDefault(require("../models/Mine"));
const createDeposit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const amountReq = parseFloat(req.body.amount);
        const userId = new mongoose_1.default.Types.ObjectId(req.body.userId);
        const isFirstDeposit = (yield Deposit_1.default.countDocuments({ userId })) === 0;
        const bonus = isFirstDeposit ? amountReq * 0.05 : 0;
        const totalAmount = amountReq + bonus;
        req.body.amount = totalAmount;
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
        res.status(200).json({ message: 'Deposit created', deposit });
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating deposit', error });
    }
});
exports.createDeposit = createDeposit;
const getAllDeposits = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deposits = yield Deposit_1.default.find({}).populate('userId');
        res.status(200).json({ deposits });
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching deposits', error });
    }
});
exports.getAllDeposits = getAllDeposits;
const getAllDepositsByUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = new mongoose_1.default.Types.ObjectId(req.params.id);
        const deposits = yield Deposit_1.default.find({ userId }).populate('userId');
        res.status(200).json({ deposits });
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching deposits', error });
    }
});
exports.getAllDepositsByUser = getAllDepositsByUser;
const getDepositById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deposit = yield Deposit_1.default.findById(req.params.id).populate('userId');
        if (!deposit)
            return res.status(404).json({ message: 'Deposit not found' });
        res.status(200).json({ deposit });
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching deposit', error });
    }
});
exports.getDepositById = getDepositById;
