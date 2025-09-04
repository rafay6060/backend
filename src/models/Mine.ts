import mongoose, { Document, Schema } from 'mongoose';

export interface IMineCoin extends Document {
  userId: mongoose.Types.ObjectId;
  isStart: boolean;
  date: Date;
  amount: number;
  startTime: Date;
  status: boolean;
}

const mineCoinSchema = new Schema<IMineCoin>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  isStart: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
  amount: { type: Number, required: true },
  startTime: { type: Date },
  status: { type: Boolean, default: true }
});

export default mongoose.model<IMineCoin>('MineCoin', mineCoinSchema);
