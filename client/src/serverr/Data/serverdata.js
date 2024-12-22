const mongoose = require('mongoose');

const airbnbSchema = new mongoose.Schema({
  name: { type: String, required: true },
  id: { type: Number, required: true, unique: true },
  bedrooms: { type: Number, required: true, min: 1 },
  bathrooms: { type: Number, required: true, min: 1 },
  description: { type: String, required: true },
  pic_url: { type: String, required: true },
  price: { type: String, required: true }
});

module.exports = mongoose.model('Airbnb', airbnbSchema, 'airbnb');
