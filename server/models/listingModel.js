const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    images: {
      type: [String],
      default: [],
    },
    currentBid: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    startingPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    buyNowPrice: {
      type: Number,
      min: 0,
      validate: {
        validator: function (value) {
          return value == null || value >= this.startingPrice;
        },
        message: "Buy now price must be greater than or equal to starting price",
      },
    },
    condition: {
      type: String,
      enum: ["New", "Used", "Refurbished"],
      default: "Used",
      trim: true,
    },
    description: {
      type: String,
      default: "No description provided yet.",
      trim: true,
      maxlength: 2000,
    },
    location: {
      type: String,
      default: "Auckland, NZ",
      trim: true,
      maxlength: 120,
    },
    sellerName: {
      type: String,
      default: "",
      trim: true,
      maxlength: 80,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Listing", listingSchema);