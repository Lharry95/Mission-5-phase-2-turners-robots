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

module.exports = {
  getListingById,
};