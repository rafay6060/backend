import Deposit from "../models/Deposit";
import Wallet from "../models/Wallet";

const axios = require('axios');
const TronWeb = require('tronweb');

const tronWeb = new TronWeb.TronWeb({
    fullHost: 'https://api.trongrid.io',
});

const createAddress = async () => {
    const account = await tronWeb.createAccount();
    // Avoid logging sensitive wallet details (keys/addresses)
    // If needed for debugging, log only a masked public address suffix
    const masked = `${account.address.base58.slice(0, 6)}...${account.address.base58.slice(-4)}`;
    console.log('Wallet generated for new user:', masked);
    return account;
};


let lastTxId: any = null;
const walletAddress = 'TKauVzEFMJbtsSkfEYBrGxPQDGWGu1EQK8';

async function checkNewDeposits(walletAddress: any, lastTxId = null) {
    try {
        const url = `https://api.trongrid.io/v1/accounts/${walletAddress}/transactions/trc20`;
        const response = await axios.get(url);

        if (!response.data || !response.data.data || response.data.data.length === 0) return;

        const txList = response.data.data;
        const newTxs = txList;
        for (const tx of newTxs) {
            const isIncoming = tx.to === walletAddress;
            const decimals = parseInt(tx.token_info?.decimals || '6');
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
            await verifyWithBackend(verifyData);
            lastTxId = tx.transaction_id; // update last seen transaction
            // }
        }
    } catch (error: any) {
        console.error('❌ Error checking deposits:', error.message);
    }
}


export const transferUSDT = async (privateKey: string, amount: number, usdtContractAddress: string) => {
    const tronWeb1 = new TronWeb({
        fullHost: 'https://api.trongrid.io',
        privateKey: privateKey as string,
    });
    try {
        const contract = await tronWeb1.contract().at(usdtContractAddress);
        const sendAmount = tronWeb1.toBigNumber(amount * 1_000_000);
        const tx = await contract.transfer(walletAddress, sendAmount).send();
        console.log(`✅ Transfer successful. TX ID: ${tx}`);
        return tx;
    } catch (err: any) {
        console.error('❌ Transfer failed:', err.message);
        throw err;
    }

}

async function verifyWithBackend(data: any) {
    try {
        const user = await Wallet.findOne({ publicKey: data?.to });
        if (user) {
            const tx = await transferUSDT(user.privateKey, data?.amount, user?.publicKey);
            if (tx) {
                const deposit = new Deposit({ transaction_Id: data?.transaction_id, toAddress: data?.to, address: data?.form, trcType: "TRC20", amount: data?.amount, userId: user?._id });
                await deposit.save();
                console.log("Transaction Save Success")
            }
        }
    } catch (error: any) {
        console.error('❌ Error verifying with backend:', error.message);
    }
}

// Start checking deposits every 5 seconds
function startDepositChecker() {
    setInterval(() => {
        console.log('⏳ Checking for new deposits...');
        checkNewDeposits(walletAddress, lastTxId);
    }, 5000);
}

export { startDepositChecker, createAddress };