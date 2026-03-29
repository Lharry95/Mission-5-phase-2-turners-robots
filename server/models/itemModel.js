const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  title: { type: String, required: true },
  condition: { type: String, required: true },
  dimensions: { type: String, required: true },
  shipping_and_pickup: { type: String, required: true },
  payment_options: { type: String, required: true },
  location: { type: String, required: true },
  closing: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model("Item", itemSchema);
