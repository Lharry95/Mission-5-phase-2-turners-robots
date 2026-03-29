const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Item = require("./models/itemModel");

dotenv.config();

const seedItems = [
  {
    title: "Vintage Wooden Desk",
    condition: "Used - Good",
    dimensions: "W 75cm H 75cm D 34cm",
    shipping_and_pickup:
      "Pickup available in Whangarei, buyer arranged freight",
    payment_options: "Cash, NZ Bank Deposit, Ping",
    location: "Whangarei, Northland",
    closing: "Closes: Fri, 13 Mar",
    price: "$120",
    image: "https://picsum.photos/seed/desk1/400/300",
  },
  {
    title: "Corner Desk with Cabinets",
    condition: "Used - Good",
    dimensions: "W 120cm H 80cm D 60cm",
    shipping_and_pickup: "Pickup available in Auckland",
    payment_options: "Cash, NZ Bank Deposit",
    location: "Auckland, Auckland",
    closing: "Closes: Sat, 14 Mar",
    price: "$150",
    image: "https://picsum.photos/seed/desk2/400/300",
  },
  {
    title: "Oak Desk",
    condition: "Used - Excellent",
    dimensions: "W 100cm H 75cm D 50cm",
    shipping_and_pickup: "Pickup available in Wellington",
    payment_options: "Cash, NZ Bank Deposit, Ping",
    location: "Wellington, Wellington",
    closing: "Closes: Sun, 15 Mar",
    price: "$220",
    image: "https://picsum.photos/seed/desk3/400/300",
  },
  {
    title: "Solid Rimu Desk",
    condition: "Used - Fair",
    dimensions: "W 90cm H 72cm D 45cm",
    shipping_and_pickup: "Pickup available in Christchurch",
    payment_options: "Cash, NZ Bank Deposit",
    location: "Christchurch, Canterbury",
    closing: "Closes: Mon, 16 Mar",
    price: "$40",
    image: "https://picsum.photos/seed/desk4/400/300",
  },
  {
    title: "Large Desk",
    condition: "Used - Good",
    dimensions: "W 150cm H 78cm D 70cm",
    shipping_and_pickup: "Pickup available in Hamilton",
    payment_options: "Cash, NZ Bank Deposit, Ping",
    location: "Hamilton, Waikato",
    closing: "Closes: Tue, 17 Mar",
    price: "$100",
    image: "https://picsum.photos/seed/desk5/400/300",
  },
  {
    title: "20th Century Wooden Desk",
    condition: "Used - Good",
    dimensions: "W 110cm H 76cm D 55cm",
    shipping_and_pickup: "Pickup available in Tauranga",
    payment_options: "Cash, NZ Bank Deposit",
    location: "Tauranga, Bay of Plenty",
    closing: "Closes: Wed, 18 Mar",
    price: "$110",
    image: "https://picsum.photos/seed/desk6/400/300",
  },
  {
    title: "Mountain Bike Trek Marlin 5",
    condition: "Used - Good",
    dimensions: "N/A",
    shipping_and_pickup: "Pickup available in Nelson",
    payment_options: "Cash, NZ Bank Deposit, Ping",
    location: "Nelson, Nelson",
    closing: "Closes: Sun, 30 Mar",
    price: "$400",
    image: "https://picsum.photos/seed/bike1/400/300",
  },
  {
    title: "Canon EOS R50 Camera",
    condition: "Used - Excellent",
    dimensions: "N/A",
    shipping_and_pickup: "Pickup available in Napier",
    payment_options: "Cash, NZ Bank Deposit",
    location: "Napier, Hawke's Bay",
    closing: "Closes: Mon, 31 Mar",
    price: "$800",
    image: "https://picsum.photos/seed/camera1/400/300",
  },
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
    await Item.deleteMany({});
    console.log("Cleared existing items");
    await Item.insertMany(seedItems);
    console.log("Successfully seeded items!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
}

seedDB();
