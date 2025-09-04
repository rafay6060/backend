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
exports.createAddress = exports.transferUSDT = void 0;
exports.startDepositChecker = startDepositChecker;
const Deposit_1 = __importDefault(require("../models/Deposit"));
const Wallet_1 = __importDefault(require("../models/Wallet"));
const axios = require('axios');
const TronWeb = require('tronweb');
const tronWeb = new TronWeb.TronWeb({
    fullHost: 'https://api.trongrid.io',
});
const createAddress = () => __awaiter(void 0, void 0, void 0, function* () {
    const account = yield tronWeb.createAccount();
    const masked = `${account.address.base58.slice(0, 6)}...${account.address.base58.slice(-4)}`;
    console.log('Wallet generated for new user:', masked);
    return account;
});
exports.createAddress = createAddress;
let lastTxId = null;
const walletAddress = 'TKauVzEFMJbtsSkfEYBrGxPQDGWGu1EQK8';
function checkNewDeposits(walletAddress_1) {
    return __awaiter(this, arguments, void 0, function* (walletAddress, lastTxId = null) {
        var _a;
        try {
            const url = `https://api.trongrid.io/v1/accounts/${walletAddress}/transactions/trc20`;
            const response = yield axios.get(url);
            if (!response.data || !response.data.data || response.data.data.length === 0)
                return;
            const txList = response.data.data;
            const newTxs = txList;
            for (const tx of newTxs) {
                const isIncoming = tx.to === walletAddress;
                const decimals = parseInt(((_a = tx.token_info) === null || _a === void 0 ? void 0 : _a.decimals) || '6');
                const amount = parseFloat(tx.value) / Math.pow(10, decimals);
                // if (isIncoming && amount > 0) {
                console.log(`\u{1F4B0} Received ${amount} ${tx.token_info.symbol} from ${tx.from}`);
                const verifyData = {
                    transaction_id: tx.transaction_id,
                    to: tx.to,
                    from: tx.from,
                    block_timestamp: tx.block_timestamp,
                    type: 'USDT',
                    amount,
                };
                yield verifyWithBackend(verifyData);
                lastTxId = tx.transaction_id; // update last seen transaction
                // }
            }
        }
        catch (error) {
            console.error('❌ Error checking deposits:', error.message);
        }
    });
}
const transferUSDT = (privateKey, amount, usdtContractAddress) => __awaiter(void 0, void 0, void 0, function* () {
    const tronWeb1 = new TronWeb({
        fullHost: 'https://api.trongrid.io',
        privateKey: privateKey,
    });
    try {
        const contract = yield tronWeb1.contract().at(usdtContractAddress);
        const sendAmount = tronWeb1.toBigNumber(amount * 1000000);
        const tx = yield contract.transfer(walletAddress, sendAmount).send();
        console.log(`✅ Transfer successful. TX ID: ${tx}`);
        return tx;
    }
    catch (err) {
        console.error('❌ Transfer failed:', err.message);
        throw err;
    }
});
exports.transferUSDT = transferUSDT;
function verifyWithBackend(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield Wallet_1.default.findOne({ publicKey: data === null || data === void 0 ? void 0 : data.to });
            if (user) {
                const tx = yield (0, exports.transferUSDT)(user.privateKey, data === null || data === void 0 ? void 0 : data.amount, user === null || user === void 0 ? void 0 : user.publicKey);
                if (tx) {
                    const deposit = new Deposit_1.default({ transaction_Id: data === null || data === void 0 ? void 0 : data.transaction_id, toAddress: data === null || data === void 0 ? void 0 : data.to, address: data === null || data === void 0 ? void 0 : data.form, trcType: "TRC20", amount: data === null || data === void 0 ? void 0 : data.amount, userId: user === null || user === void 0 ? void 0 : user._id });
                    yield deposit.save();
                    console.log("Transaction Save Success");
                }
            }
        }
        catch (error) {
            console.error('❌ Error verifying with backend:', error.message);
        }
    });
}
// Start checking deposits every 5 seconds
function startDepositChecker() {
    setInterval(() => {
        console.log('⏳ Checking for new deposits...');
        checkNewDeposits(walletAddress, lastTxId);
    }, 5000);
}
