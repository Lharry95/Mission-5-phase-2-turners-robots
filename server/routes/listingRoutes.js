const express = require("express");
const {
  getListingById,
  placeBid,
} = require("../controllers/listingController");

const router = express.Router();

router.get("/:id", getListingById);
router.patch("/:id/bid", placeBid);

module.exports = router;
