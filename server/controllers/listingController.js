const mongoose = require("mongoose");
const Listing = require("../models/listingModel");

const getListingById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        error: "Invalid listing id",
      });
    }

    const listing = await Listing.findById(id);

    if (!listing) {
      return res.status(404).json({
        error: "Listing not found",
      });
    }

    return res.status(200).json(listing);
  } catch (error) {
    console.error("Failed to fetch listing:", error.message);
    return res.status(500).json({
      error: "Failed to fetch listing",
    });
  }
};

const placeBid = async (req, res) => {
  try {
    const { id } = req.params;
    const { bidAmount } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        error: "Invalid listing id",
      });
    }

    const listing = await Listing.findById(id);

    if (!listing) {
      return res.status(404).json({
        error: "Listing not found",
      });
    }

    const numericBidAmount = Number(bidAmount);

    if (
      bidAmount === undefined ||
      bidAmount === null ||
      Number.isNaN(numericBidAmount)
    ) {
      return res.status(400).json({
        error: "Bid amount must be a valid number",
      });
    }

    if (numericBidAmount <= 0) {
      return res.status(400).json({
        error: "Bid amount must be greater than zero",
      });
    }

    if (numericBidAmount <= listing.currentBid) {
      return res.status(400).json({
        error: "Bid amount must be higher than the current bid",
      });
    }

    listing.currentBid = numericBidAmount;
    await listing.save();

    return res.status(200).json({
      message: "Bid placed successfully",
      listing,
    });
  } catch (error) {
    console.error("Failed to place bid:", error.message);
    return res.status(500).json({
      error: "Failed to place bid",
    });
  }
};

module.exports = {
  getListingById,
  placeBid,
};