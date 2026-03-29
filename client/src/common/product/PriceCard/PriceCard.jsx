import { useState } from "react";
import ListingActions from "../ListingActions/ListingActions";
import "./PriceCard.css";

function PriceCard({ listing, formattedStartingPrice, formattedBuyNowPrice }) {
  const [isWatchlisted, setIsWatchlisted] = useState(false);

  return (
    <section className="listing-sidebar">
      <div className="listing-sidebar__intro">
        <div className="listing-sidebar__title-row">
          <h1 className="listing-sidebar__title">{listing.title}</h1>

          <button
            type="button"
            className="listing-sidebar__compare-icon"
            aria-label={isWatchlisted ? "Remove from watchlist" : "Add to watchlist"}
            aria-pressed={isWatchlisted}
            onClick={() => setIsWatchlisted((prev) => !prev)}
          >
            <img
              className="listing-sidebar__compare-icon-img"
              src={isWatchlisted ? "/watchlist-minus.png" : "/watchlist-plus.png"}
              alt=""
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="listing-sidebar__meta">
          <div className="listing-sidebar__meta-group">
            <img
              className="listing-sidebar__meta-clock"
              src="/clock-icon-placeholder.png"
              alt=""
              aria-hidden="true"
            />

            <div className="listing-sidebar__meta-text">
              <div className="listing-sidebar__meta-top">
                Closes: Fri 13th March, 8:22pm
              </div>

              <div className="listing-sidebar__meta-bottom">
                4 days, 4 hours, 50 minutes
              </div>
            </div>
          </div>
        </div>
      </div>

      <ListingActions />

      <div className="price-card">
        <div className="price-card__section">
          <p className="price-card__label">Buy now</p>
          <h2 className="price-card__main-price">{formattedBuyNowPrice}</h2>

          <button className="price-card__buy-now-button" type="button">
            Buy Now
          </button>
        </div>

        <div className="price-card__divider" />

        <div className="price-card__section">
          <p className="price-card__label">Starting price</p>
          <h3 className="price-card__sub-price">{formattedStartingPrice}</h3>
        </div>
      </div>
    </section>
  );
}

export default PriceCard;