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