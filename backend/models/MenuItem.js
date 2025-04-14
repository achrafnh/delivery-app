const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" }
}, { timestamps: true });

module.exports = mongoose.model("MenuItem", menuItemSchema);
