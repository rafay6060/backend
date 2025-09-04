import mongoose, { Document, Schema } from 'mongoose';



interface IDeposit extends Document {
    transaction_Id: string;
    userId: mongoose.Types.ObjectId;
    date: Date;
    amount: number;
    address: string;
    toAddress: string;
    trcType:string;
    status?:boolean
}



const depositSchema = new Schema<IDeposit>({
    transaction_Id: { type: String, required: true, unique: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, default: Date.now },
    amount: { type: Number, required: true },
    address: { type: String, required: true },
    toAddress: { type: String, required: true },
    trcType: { type: String, required: true },
    status: { type: Boolean, default: false },
  });
  
  export default mongoose.model<IDeposit>('Deposit', depositSchema);