import express from "express";
import { addDriver, getDrivers } from "../controllers/driverController.js";

const router = express.Router();

router.post("/", addDriver);  // Add new driver
router.get("/", getDrivers);  // Get all drivers

export default router;
