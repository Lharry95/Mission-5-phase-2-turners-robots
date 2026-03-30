const mongoose = require("mongoose");
const listingsSeedData = require("../data/listingsSeedData");
const Listing = require("../models/listingModel");
const connectDB = require("../../config/db");

async function seedListings() {
  try {
    await connectDB();

    await Listing.deleteMany({});
    await Listing.insertMany(listingsSeedData);

    console.log("Listings seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding listings:", error);
    process.exit(1);
  }
}

seedListings();