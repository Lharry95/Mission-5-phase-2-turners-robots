const express = require("express");
const {
  getListings,
  getListingById,
  placeBid,
} = require("../controllers/listingController");

const router = express.Router();

router.get("/", getListings);
router.get("/:id", getListingById);
router.patch("/:id/bid", placeBid);

module.exports = router;