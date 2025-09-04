// models/ReferralProgress.ts
import mongoose, { Document, Schema } from 'mongoose';

interface IReferralProgress extends Document {
    userId: mongoose.Types.ObjectId;
    level: number;
    referredUsers: mongoose.Types.ObjectId[];
    unlocked: boolean;
    requiredCount: number;
    unlockedAt?: Date;
}

const referralProgressSchema = new Schema<IReferralProgress>({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    level: { type: Number, required: true },
    referredUsers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    unlocked: { type: Boolean, default: false },
    requiredCount: { type: Number, required: true },
    unlockedAt: { type: Date },
});

referralProgressSchema.index({ userId: 1, level: 1 }, { unique: true });

export default mongoose.model<IReferralProgress>('ReferralProgress', referralProgressSchema);
