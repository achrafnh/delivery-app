const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" },
  items: [String],
  total: Number,
  status: { type: String, enum: ["pending", "preparing", "delivering", "completed"], default: "pending" }
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
