import mongoose from 'mongoose';



const WalletSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    privateKey: {
        type: String,
        required: true,
    },
    publicKey: {
        type: String,
        required: true,
    },

    type: {
        type: String,
        enum: ['USDT'],
        required: true,
    },
    amount: {
        type: Number,
        default: 0
    },
    status: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true,
});

const Wallet = mongoose.model('Wallet', WalletSchema);
export default Wallet;
