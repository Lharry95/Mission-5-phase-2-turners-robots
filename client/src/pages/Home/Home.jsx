import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import "./Home.css";
import image23 from "../../assets/images/image23.png";
import image24 from "../../assets/images/image24.png";
import image26 from "../../assets/images/image26.png";
import image27 from "../../assets/images/image27.png";
import image28 from "../../assets/images/image28.png";
import image29 from "../../assets/images/image29.png";
import image30 from "../../assets/images/image30.png";
import image31 from "../../assets/images/image31.png";

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
    title: "Vintage Wooden Desk",
    location: "Whangarei, Northland",
    closing: "Closes: Fri, 13 Mar",
    price: "$120",
    image: image23,
  },
  {
    id: 2,
    title: "Corner Desk with Cabinets",
    location: "Auckland, Auckland",
    closing: "Closes: Sat, 14 Mar",
    price: "$150",
    image: image24,
  },
  {
    id: 3,
    title: "Oak Desk",
    location: "Wellington, Wellington",
    closing: "Closes: Sun, 15 Mar",
    price: "$220",
    image: image26,
  },
  {
    id: 4,
    title: "Solid Rimu Desk",
    location: "Christchurch, Canterbury",
    closing: "Closes: Mon, 16 Mar",
    price: "$40",
    image: image27,
  },
  {
    id: 5,
    title: "Large Desk",
    location: "Hamilton, Waikato",
    closing: "Closes: Tue, 17 Mar",
    price: "$100",
    image: image28,
  },
  {
    id: 6,
    title: "20th Century Wooden Desk",
    location: "Tauranga, Bay of Plenty",
    closing: "Closes: Wed, 18 Mar",
    price: "$110",
    image: image29,
  },
  {
    id: 7,
    title: "Mountain Bike Trek Marlin 5",
    location: "Nelson, Nelson",
    closing: "Closes: Sun, 30 Mar",
    price: "$400",
    image: image30,
  },
  {
    id: 8,
    title: "Canon EOS R50 Camera",
    location: "Napier, Hawke's Bay",
    closing: "Closes: Mon, 31 Mar",
    price: "$800",
    image: image31,
  },
];

function Home() {
  const [activeCategory, setActiveCategory] = useState("Marketplace");
  const [shipping, setShipping] = useState("Shipping: All");
  const [location, setLocation] = useState("All Locations");
  const [sortBy, setSortBy] = useState("Sort: Best Match");
  const navigate = useNavigate();

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
            <div
              key={product.id}
              className="product-card"
              onClick={() => {
                if (product.id === 1) {
                  navigate("/productlisting");
                }
              }}
            >
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
