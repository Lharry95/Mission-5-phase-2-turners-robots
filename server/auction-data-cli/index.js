require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
const Item = require("./models/itemSchema");
const Listing = require("../models/listingModel");
const connectDb = require("../config/db");
const seedData = require("./data/seedData");
const listingsSeedData = require("./data/listingsSeedData");

// map global promise - get rid of warning
mongoose.Promise = global.Promise;

// add specific item
const addItem = async (item) => {
  try {
    await connectDb();
    await Item.create(item);
    console.log("New Item Added");
  } catch (error) {
    console.error("Sorry! Couldn't add your item", error);
  } finally {
    mongoose.connection.close();
  }
};

// list all items
const listItems = async () => {
  try {
    await connectDb();
    const items = await Item.find();
    console.log(items);
    console.log(`${items.length} items`);
  } catch (error) {
    console.error("Couldn't find the item List", error);
  } finally {
    mongoose.connection.close();
  }
};

// delete all the items
const deleteAllItems = async () => {
  try {
    await connectDb();
    await Item.deleteMany();
    console.log("All items successfully removed from Mongo!");
  } catch (error) {
    console.error("Items weren't removed, something went wrong", error);
  } finally {
    mongoose.connection.close();
  }
};

// seed all the auctions in seedData.js to mongoDB
const seedItems = async () => {
  try {
    await connectDb();
    await Item.insertMany(seedData);
    console.log("All items seeded successfully to MongoDB");
  } catch (error) {
    console.error("Something went wrong. Couldn't seed data!", error);
  } finally {
    mongoose.connection.close();
  }
};

// seed all listings
const seedListings = async () => {
  try {
    await connectDb();
    await Listing.deleteMany();
    await Listing.insertMany(listingsSeedData);
    console.log("All listings seeded successfully to MongoDB");
  } catch (error) {
    console.error("Something went wrong. Couldn't seed listings!", error);
  } finally {
    mongoose.connection.close();
  }
};

// delete all listings
const deleteAllListings = async () => {
  try {
    await connectDb();
    await Listing.deleteMany();
    console.log("All listings successfully removed from Mongo!");
  } catch (error) {
    console.error("Listings weren't removed, something went wrong", error);
  } finally {
    mongoose.connection.close();
  }
};

module.exports = {
  addItem,
  listItems,
  deleteAllItems,
  seedItems,
  seedListings,
  deleteAllListings,
};
