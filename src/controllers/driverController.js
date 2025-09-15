import Driver from "../models/Driver.js";

export const addDriver = async (req, res) => {
  try {
    const { name, phone, vehicleType } = req.body;
    const driver = new Driver({ name, phone, vehicleType });
    await driver.save();
    res.status(201).json(driver);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.json(drivers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
