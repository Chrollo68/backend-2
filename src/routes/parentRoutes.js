import express from "express";
import { addParent } from "../controllers/parentController.js";

const router = express.Router();

router.post("/", addParent);  // Add new parent (customer)

export default router;
