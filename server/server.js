const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const { Item } = require("./auction-data-cli/models/auctionData");
const connectingDb = require("./auction-data-cli/db/databaseConnection");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectingDb();

app.get("/", (req, res) => {
  res.send("Serving is running..");
});

app.get("/comparisontable", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({
      message: "Error! Couldn't retrieve items",
      error: error.message,
    });
  }
});

app.get("/comparisontable/compare", async (req, res) => {
  try {
    const ids = req.query.items.split(",");
    const products = await Product.find({ _id: { $in: ids } });
    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: "Error! Couldn't retrieve items",
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
