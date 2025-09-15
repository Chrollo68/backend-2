import Delivery from "../models/Delivery.js";

export const scheduleDelivery = async (req, res) => {
  try {
    const { pickupLocation, deliveryLocation, vehicleType, parentId } = req.body;
    const delivery = new Delivery({ pickupLocation, deliveryLocation, vehicleType, parent: parentId });
    await delivery.save();
    res.status(201).json(delivery);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getDeliveries = async (req, res) => {
  try {
    const deliveries = await Delivery.find().populate("parent").populate("driver");
    res.json(deliveries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateDeliveryStatus = async (req, res) => {
  try {
    const { status, driverId } = req.body;
    const delivery = await Delivery.findByIdAndUpdate(
      req.params.id,
      { status, driver: driverId },
      { new: true }
    ).populate("parent").populate("driver");
    res.json(delivery);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
