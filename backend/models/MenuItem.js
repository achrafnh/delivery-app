const mongoose = require('mongoose');
const MenuItemSchema = new mongoose.Schema({
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
  name: String,
  description: String,
  price: Number
});
module.exports = mongoose.model('MenuItem', MenuItemSchema);
