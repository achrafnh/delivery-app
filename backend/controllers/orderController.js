const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  try {
    const { items, restaurantId } = req.body;
    const order = { items, restaurantId, user: req.user.id, status: "pending" };
    res.status(201).json({ message: "Order created", order });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    // Find order by ID and update status in DB
    res.status(200).json({ message: "Order status updated", status });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



exports.getOrders = async (req, res) => {
  try {
    const status = req.query.status;
    let query = {};
    if (status) query.status = status;

    const orders = await Order.find(query).populate("driver user restaurant");
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.assignDriver = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { driver: req.user.id, status: "accepted" },
      { new: true }
    );
    res.status(200).json({ message: "Order assigned", order });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("driver user restaurant");
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};