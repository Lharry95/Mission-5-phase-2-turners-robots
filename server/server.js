const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const listingRoutes = require("./routes/listingRoutes");
const Item = require("./models/itemModel");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.send("Server is running.");
});

app.get("/comparison", async (req, res) => {
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

app.get("/comparison/table", async (req, res) => {
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

app.get("/api/items", async (req, res) => {
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

app.use("/api/listings", listingRoutes);

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
}

app.get("/search", async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ message: "Please enter a search" });
    }

    const keyWords = query.split(" ");

    const listings = await Item.db.collection("auction-listings").find({
      $or: keyWords.map((query) => ({
        title: { $regex: query, $options: "i" },
      })),
    }).toArray();

    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: "Search failed", error: error.message });
  }
});

startServer();
