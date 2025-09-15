import express from "express";
import { addFoodBox, getFoodBoxes } from "../controllers/foodBoxController.js";

const router = express.Router();

router.post("/", addFoodBox);   // Add food box
router.get("/", getFoodBoxes);  // Get all food boxes

export default router;
