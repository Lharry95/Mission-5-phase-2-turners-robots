import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-header__brand" aria-label="Trade Me home">
          <img
            className="site-header__logo"
            src="/placeholder-logo.png"
            alt="Trade Me"
          />
        </Link>

        <div className="site-header__search">
          <label className="site-header__search-label" htmlFor="site-search">
            Search all of Trade Me
          </label>

          <img
            className="site-header__search-icon"
            src="/search-icon.png"
            alt=""
            aria-hidden="true"
          />

          <input
            id="site-search"
            className="site-header__search-input"
            type="text"
            placeholder="Search all of Trade Me"
          />
        </div>

        <nav className="site-header__nav" aria-label="Main navigation">
          <Link to="/comparison" className="site-header__nav-item">
            <img
              className="site-header__nav-img"
              src="/comparison-icon.png"
              alt=""
              aria-hidden="true"
            />
            <span className="site-header__nav-text">Comparison</span>
          </Link>

          <a href="#" className="site-header__nav-item">
            <img
              className="site-header__nav-img"
              src="/categories-icon.png"
              alt=""
              aria-hidden="true"
            />
            <span className="site-header__nav-text">Categories</span>
          </a>

          <a href="#" className="site-header__nav-item">
            <img
              className="site-header__nav-img site-header__nav-img--watchlist"
              src="/watchlist-icon.png"
              alt=""
              aria-hidden="true"
            />
            <span className="site-header__nav-text">Watchlist</span>
          </a>

          <a href="#" className="site-header__nav-item">
            <img
              className="site-header__nav-img site-header__nav-img--favourites"
              src="/favourites-icon.png"
              alt=""
              aria-hidden="true"
            />
            <span className="site-header__nav-text">Favourites</span>
          </a>

          <a href="#" className="site-header__nav-item">
            <img
              className="site-header__nav-img site-header__nav-img--start-listing"
              src="/start-listing-icon.png"
              alt=""
              aria-hidden="true"
            />
            <span className="site-header__nav-text">Start a listing</span>
          </a>

          <a href="#" className="site-header__nav-item">
            <img
              className="site-header__nav-avatar"
              src="/profile-placeholder.png"
              alt=""
              aria-hidden="true"
            />
            <span className="site-header__nav-text">My Trade Me</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;