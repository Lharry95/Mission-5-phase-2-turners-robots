const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
  condition: { type: String, required: true },
  dimensions: { type: String, required: true },
  shipping_and_pickup: { type: String, required: true },
  payment_options: { type: String, required: true },
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
