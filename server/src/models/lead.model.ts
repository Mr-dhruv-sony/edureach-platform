import mongoose, { Schema, Document } from "mongoose";

export interface ILead extends Document {
  name: string;
  email?: string;
  phone?: string;
  interest?: string;
  source: string;
  status: string;
  createdAt: Date;
}

const leadSchema = new Schema<ILead>({
  name: { type: String, required: true },
  email: String,
  phone: String,
  interest: String,

  source: {
    type: String,
    default: "website"
  },

  status: {
    type: String,
    default: "new"
  }

}, { timestamps: true });

export default mongoose.model<ILead>("Lead", leadSchema);