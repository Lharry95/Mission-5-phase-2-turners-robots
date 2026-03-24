import React, { useState } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import "./Home.css";

const categories = [
  { name: "Marketplace", icon: "/src/pages/Home/marketplace-icon.png" },
  { name: "Property", icon: "/src/pages/Home/home-icon.png" },
  { name: "Motors", icon: "/src/pages/Home/car-icon.png" },
  { name: "Jobs", icon: "/src/pages/Home/job-icon.png" },
  { name: "Services", icon: "/src/pages/Home/services-icon.png" },
];

const products = [
  {
    id: 1,
    title: "Beautiful Family Home",
    location: "Auckland, Auckland",
    closing: "Closes: Mon, 24 Mar",
    price: "$850,000",
    image: "https://placehold.co/300x200?text=Property+1",
  },
  {
    id: 2,
    title: "Vintage Wooden Desk",
    location: "Wellington, Wellington",
    closing: "Closes: Tue, 25 Mar",
    price: "$120",
    image: "https://placehold.co/300x200?text=Product+2",
  },
  {
    id: 3,
    title: "2022 Toyota Corolla",
    location: "Christchurch, Canterbury",
    closing: "Closes: Wed, 26 Mar",
    price: "$18,500",
    image: "https://placehold.co/300x200?text=Motors+3",
  },
  {
    id: 4,
    title: "iPhone 13 Pro 256GB",
    location: "Hamilton, Waikato",
    closing: "Closes: Thu, 27 Mar",
    price: "$650",
    image: "https://placehold.co/300x200?text=Product+4",
  },
  {
    id: 5,
    title: "Modern Apartment",
    location: "Tauranga, Bay of Plenty",
    closing: "Closes: Fri, 28 Mar",
    price: "$450,000",
    image: "https://placehold.co/300x200?text=Property+5",
  },
  {
    id: 6,
    title: "Sony PlayStation 5",
    location: "Dunedin, Otago",
    closing: "Closes: Sat, 29 Mar",
    price: "$550",
    image: "https://placehold.co/300x200?text=Product+6",
  },
  {
    id: 7,
    title: "Mountain Bike Trek Marlin 5",
    location: "Nelson, Nelson",
    closing: "Closes: Sun, 30 Mar",
    price: "$400",
    image: "https://placehold.co/300x200?text=Product+7",
  },
  {
    id: 8,
    title: "Canon EOS R50 Camera",
    location: "Napier, Hawke's Bay",
    closing: "Closes: Mon, 31 Mar",
    price: "$800",
    image: "https://placehold.co/300x200?text=Product+8",
  },
];

function Home() {
  const [activeCategory, setActiveCategory] = useState("Marketplace");
  const [shipping, setShipping] = useState("Shipping: All");
  const [location, setLocation] = useState("All Locations");
  const [sortBy, setSortBy] = useState("Sort: Best Match");

  return (
    <div className="home">
      <Header />
      <main className="home-main">
        {/* Category Tabs */}
        <div className="category-tabs">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className={`category-tab ${activeCategory === cat.name ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.name)}
            >
              <img src={cat.icon} alt={cat.name} className="category-icon" />
              <span className="category-name">{cat.name}</span>
            </div>
          ))}
        </div>

        {/* Filter Bar */}
        <div className="filter-bar">
          <select
            className="filter-select"
            value={shipping}
            onChange={(e) => setShipping(e.target.value)}
          >
            <option>Shipping: All</option>
            <option>Shipping: Pickup available</option>
            <option>Shipping: Free shipping</option>
          </select>

          <select
            className="filter-select"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option>All Locations</option>
            <option>Auckland</option>
            <option>Wellington</option>
            <option>Christchurch</option>
            <option>Whangarei</option>
            <option>Hamilton</option>
          </select>

          <select
            className="filter-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option>Sort: Best Match</option>
            <option>Sort: Lowest Buy Now</option>
            <option>Sort: Highest Buy Now</option>
            <option>Sort: Closing soon</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <div className="product-info">
                <p className="product-title">{product.title}</p>
                <p className="product-location">{product.location}</p>
                <p className="product-closing">{product.closing}</p>
                <p className="product-price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
