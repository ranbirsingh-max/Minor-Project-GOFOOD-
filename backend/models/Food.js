const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  CategoryName: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  options: {
    half: String,
    full: String,
    regular: String,
    medium: String,
    large: String
  },
  description: {
    type: String,
    required: true
  }
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
