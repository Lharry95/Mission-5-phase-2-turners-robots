const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const listingRoutes = require("./routes/listingRoutes");
const Item = require("./models/itemModel");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running.");
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

startServer();
