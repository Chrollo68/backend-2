import mongoose from "mongoose";

const deliverySchema = new mongoose.Schema({
  pickupLocation: { type: String, required: true },
  deliveryLocation: { type: String, required: true },
  vehicleType: { type: String, enum: ["bike", "car", "van"], required: true },
  parent: { type: mongoose.Schema.Types.ObjectId, ref: "Parent" },
  driver: { type: mongoose.Schema.Types.ObjectId, ref: "Driver" },
  status: { type: String, enum: ["pending", "assigned", "completed"], default: "pending" }
}, { timestamps: true });

export default mongoose.model("Delivery", deliverySchema);
