const mongoose = require('mongoose');
const RestaurantSchema = new mongoose.Schema({
  name: String,
  address: String,
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});
module.exports = mongoose.model('Restaurant', RestaurantSchema);
