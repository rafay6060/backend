import mongoose, { Document, Schema } from 'mongoose';



interface IWithdraw extends Document {
    userId: mongoose.Types.ObjectId;
    date: Date;
    amount: number;
    address: string;
    status?: boolean;
    type: "reward" | "all",
    statusWithdraw: "pending" | 'approve' | 'reject' | 'cancelled',
    reason?:string
}



const depositSchema = new Schema<IWithdraw>({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, default: Date.now },
    type: { type: String, enum: ["reward", 'all'], default: "reward" },
    amount: { type: Number, required: true },
    address: { type: String, required: true },
    status: { type: Boolean, default: false },
    statusWithdraw: { type: String, enum: ["pending", 'approve', 'reject', 'cancelled'], default: 'pending' },
    reason:{
        type: String, default: ""
    }
});

export default mongoose.model<IWithdraw>('Withdraw', depositSchema);