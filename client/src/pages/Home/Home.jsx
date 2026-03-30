import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import "./Home.css";
import watchlistIcon from "../../assets/icons/AddtoWatchlist.png"; // ← add this import at the top

const categories = [
  { name: "Marketplace", icon: "/src/pages/Home/marketplace-icon.png" },
  { name: "Property", icon: "/src/pages/Home/home-icon.png" },
  { name: "Motors", icon: "/src/pages/Home/car-icon.png" },
  { name: "Jobs", icon: "/src/pages/Home/job-icon.png" },
  { name: "Services", icon: "/src/pages/Home/services-icon.png" },
];

function Home() {
  const [activeCategory, setActiveCategory] = useState("Marketplace");
  const [shipping, setShipping] = useState("Shipping: All");
  const [location, setLocation] = useState("All Locations");
  const [sortBy, setSortBy] = useState("Sort: Best Match");
  const [products, setProducts] = useState([]); // ← ADD THIS
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/api/items")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch items:", err));
  }, []);

  return (
    <div className="home">
      <Header />
      <main className="home-main">
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

        <div className="product-grid">
          {products.map((product) => (
            <div
              key={product._id}
              className="product-card"
              onClick={() => {
                if (product._id === 1) {
                  navigate("/productlisting");
                }
              }}
            >
              <div className="product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
                <img
                  src={watchlistIcon}
                  alt="Add to Watchlist"
                  className="watchlist-icon"
                />
              </div>
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
