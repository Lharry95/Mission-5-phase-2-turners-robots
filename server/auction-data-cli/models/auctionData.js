const mongoose = require("mongoose");

const auctionDataSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  start_price: { type: Number, required: true },
  reserve_price: { type: Number, required: true },
});

const ItemSchema = mongoose.Schema({
  title: { type: String, required: true },
  condition: { type: String, required: true },
  dimensions: { type: String, required: true },
  shipping_and_pickup: { type: String, required: true },
  payment_options: { type: String, required: true },
});

const Item = mongoose.model("Item", ItemSchema);
const AuctionData = mongoose.model("AuctionData", auctionDataSchema);

module.exports = { AuctionData, Item };
