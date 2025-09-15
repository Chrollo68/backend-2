import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  vehicleType: { type: String, enum: ["bike", "car", "van"], required: true }
}, { timestamps: true });

export default mongoose.model("Driver", driverSchema);
