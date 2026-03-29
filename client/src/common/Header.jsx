import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo/trade_me_logo.svg.png";
import comparisonIcon from "../assets/icons/Comparison.png";
import watchlistIcon from "../assets/icons/Watchlist.png";
import categoriesIcon from "../assets/icons/Categories.png";
import favouritesIcon from "../assets/icons/Favourites.png";
import startListingIcon from "../assets/icons/start-a-listing.png";
import myTradeMeIcon from "../assets/icons/my-trade-me.png";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const navigate = useNavigate();

  const suggestions = [
    {
      type: "Recent",
      items: [{ name: "wooden desk" }],
    },
    {
      type: "Suggestions",
      items: [
        { name: "wooden desk" },
        { name: "desk table" },
        { name: "designer" },
      ],
    },
    {
      type: "Categories",
      items: [
        {
          name: "Desire",
          subtitle: "Mobile phones/ Mobile phones/ HTC/ Desire",
        },
        {
          name: "Design",
          subtitle: "Books/ Non-fiction/ Art, photography & design/ Design",
        },
        {
          name: "Desk & table",
          subtitle: "Home & living/ Heating & cooling/ Fans/ Desk & table",
        },
      ],
    },
    {
      type: "Stores",
      items: [
        {
          name: "Design Withdrawals",
          subtitle:
            "Design Withdrawals has a unique and extensive collection offering a gift for everyone.",
        },
        {
          name: "Designer Frames Ltd",
          subtitle:
            "We are a picture framing supplier and a factory outlet, we sell ready made frames.",
        },
      ],
    },
  ];

  return (
    <header className="header">
      {/* Top Row - Logo and Nav Icons */}
      <div className="header-top">
        <div className="header-logo">
          <img src={logo} alt="Trade Me" className="logo-img" />
        </div>
        <nav className="header-nav">
          <Link to="/comparison" className="link">
            <div className="nav-item">
              <img src={comparisonIcon} alt="Comparison" className="nav-icon" />
            </div>
          </Link>
          <div className="nav-item">
            <img src={categoriesIcon} alt="Categories" className="nav-icon" />
          </div>
          <div className="nav-item">
            <img src={watchlistIcon} alt="Watchlist" className="nav-icon" />
          </div>
          <div className="nav-item">
            <img src={favouritesIcon} alt="Favourites" className="nav-icon" />
          </div>
          <div className="nav-item">
            <img
              src={startListingIcon}
              alt="Start a listing"
              className="nav-icon"
            />
          </div>
          <div className="nav-item">
            <img src={myTradeMeIcon} alt="My Trade Me" className="nav-icon" />
          </div>
        </nav>
      </div>

      {/* Bottom Row - Search Bar */}
      <div className="header-bottom">
        <div className="header-search-wrapper">
          <div className={`search-bar ${searchFocused ? "focused" : ""}`}>
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search all of Trade Me"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
            />
            <button
              className={`search-btn ${searchQuery ? "active" : ""}`}
              onClick={() => {
                if (searchQuery) {
                  navigate(`/searchresults?q=${searchQuery}`);
                }
              }}
            >
              Search
            </button>
          </div>

          {/* Search Overlay */}
          {searchFocused && (
            <div className="search-overlay">
              {suggestions.map((group) => (
                <div key={group.type} className="suggestion-group">
                  <p className="suggestion-type">{group.type}</p>
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="suggestion-item"
                      onClick={() => setSearchQuery(item.name)}
                    >
                      {group.type === "Stores" && (
                        <div className="store-avatar">{item.name[0]}</div>
                      )}
                      <div>
                        <p className="suggestion-name">{item.name}</p>
                        {item.subtitle && (
                          <p className="suggestion-subtitle">{item.subtitle}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
              <p className="browse-categories">Browse all categories</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
