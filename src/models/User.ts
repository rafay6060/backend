import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
  username: string;
  uid: string;
  email: string;
  number: string;
  phone?: string;
  mailOtp: string;
  password: string;
  plainPassword: string;
  status: boolean;
  amount: number;
  remainingBalance?: number;
  depositAmount?: number;
  withdrawalAmount?: number;
  referralCode: string;
  referredBy?: string; // referral code or user id
  image?: string; // referral code or user id
  role?: string; // user role (admin, user)
  createdAt?: Date;
  // referredUsers?: Array<any>
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  uid: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  number: { type: String, required: true },
  phone: { type: String, default: null },
  mailOtp: { type: String },
  password: { type: String, required: true },
  plainPassword: { type: String },
  status: { type: Boolean, default: false },
  amount: { type: Number, default: 0 },
  remainingBalance: { type: Number, default: 0 },
  depositAmount: { type: Number, default: 0 },
  withdrawalAmount: { type: Number, default: 0 },
  referralCode: { type: String, unique: true },
  referredBy: { type: String, default: null },
  image: { type: String, default: null },
  role: { type: String, default: 'user' }, // default role is user
  // referredUsers: [{}],
}, {
  timestamps: true // This will add createdAt and updatedAt fields
});

export default mongoose.model<IUser>('User', userSchema);
