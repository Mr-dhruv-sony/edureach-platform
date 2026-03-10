import mongoose, { Schema } from "mongoose";
import type { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  phone?: string;
  role: "student" | "admin";
  created_at: Date;
}

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },

  password: {
    type: String,
    required: true
  },

  phone: {
    type: String
  },

  role: {
    type: String,
    enum: ["student", "admin"],
    default: "student"
  },

  created_at: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
