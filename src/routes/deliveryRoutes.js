import express from "express";
import { scheduleDelivery, getDeliveries, updateDeliveryStatus } from "../controllers/deliveryController.js";

const router = express.Router();

router.post("/", scheduleDelivery);          // Schedule new delivery
router.get("/", getDeliveries);              // Get all deliveries
router.put("/:id/status", updateDeliveryStatus); // Update delivery status + assign driver

export default router;
