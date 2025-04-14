const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: [
    {
      name: String,
      quantity: Number
    }
  ],
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant"
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  driver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "delivering", "completed"],
    default: "pending"
  }
}, { timestamps: true });
module.exports = mongoose.model("Order", orderSchema);
