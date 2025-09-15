import FoodBox from "../models/FoodBox.js";

export const addFoodBox = async (req, res) => {
  try {
    const { boxId, description, status } = req.body;
    const foodBox = new FoodBox({ boxId, description, status });
    await foodBox.save();
    res.status(201).json(foodBox);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getFoodBoxes = async (req, res) => {
  try {
    const foodBoxes = await FoodBox.find();
    res.json(foodBoxes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
