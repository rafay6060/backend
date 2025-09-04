import mongoose, { Document, Schema } from 'mongoose';

export interface IEarnCoin extends Document {
  userId: mongoose.Types.ObjectId;
  date: Date;
  amount: number;
  status: boolean;
}

const claimCoinSchema = new Schema<IEarnCoin>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  amount: { type: Number, required: true },
  status: { type: Boolean, default: true }
});

export default mongoose.model<IEarnCoin>('EarnCoin', claimCoinSchema);
