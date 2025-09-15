import Parent from "../models/Parent.js";

export const addParent = async (req, res) => {
  try {
    const { name, phone, address } = req.body;
    const parent = new Parent({ name, phone, address });
    await parent.save();
    res.status(201).json(parent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
