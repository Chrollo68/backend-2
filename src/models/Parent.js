import mongoose from "mongoose";

const parentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model("Parent", parentSchema);
