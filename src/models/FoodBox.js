import mongoose from "mongoose";

const foodBoxSchema = new mongoose.Schema({
  boxId: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ["available", "in-transit", "delivered"], default: "available" }
}, { timestamps: true });

export default mongoose.model("FoodBox", foodBoxSchema);
