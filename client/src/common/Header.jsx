import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const navigate = useNavigate();

  const suggestions = [
    { type: "Recent", items: ["wooden desk"] },
    { type: "Suggestions", items: ["wooden desk", "desk table", "designer"] },
    { type: "Categories", items: ["Desire", "Design", "Desk & table"] },
    { type: "Stores", items: ["Design Withdrawals", "Designer Frames Ltd"] },
  ];

  return (
    <header className="header">
      {/* Top Row - Logo and Nav Icons */}
      <div className="header-top">
        <div className="header-logo">
          <img src="/src/common/logo.png" alt="Trade Me" className="logo-img" />
        </div>
        <nav className="header-nav">
          <div className="nav-item">
            ⚖️ <span>Comparison</span>
          </div>
          <div className="nav-item">
            ☰ <span>Categories</span>
          </div>
          <div className="nav-item">
            👁 <span>Watchlist</span>
          </div>
          <div className="nav-item">
            ♡ <span>Favourites</span>
          </div>
          <div className="nav-item">
            ✏️ <span>Start a listing</span>
          </div>
          <div className="nav-item">
            👤 <span>My Trade Me</span>
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
                    <p
                      key={item}
                      className="suggestion-item"
                      onClick={() => setSearchQuery(item)}
                    >
                      {item}
                    </p>
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
