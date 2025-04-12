const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
  items: [{
    menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
    quantity: Number
  }],
  totalPrice: Number,
  status: { type: String, enum: ['placed','accepted','in_transit','delivered'], default: 'placed' },
  driver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  placedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Order', OrderSchema);
