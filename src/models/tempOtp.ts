// models/Otp.ts
import mongoose, { Document, Schema } from 'mongoose';

interface IOtp extends Document {
    email: string;
    otp: string;
    expiresAt: Date;
    verified: boolean;
}

const OtpSchema = new Schema<IOtp>({
    email: { type: String, required: true },
    otp: { type: String, required: true },
    expiresAt: { type: Date, required: true },
    verified: { type: Boolean, default: false },
});

export const OtpModel = mongoose.model<IOtp>('tempOtp', OtpSchema);
