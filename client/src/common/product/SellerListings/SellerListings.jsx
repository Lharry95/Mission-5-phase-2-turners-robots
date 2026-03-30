import { useState } from "react";
import "./SellerListings.css";

function SellerListings({
  listings = [],
  currentListingId,
  sellerName,
  apiBaseUrl,
}) {
  const sellerItems = listings.filter(
    (item) => item.sellerName === sellerName && item._id !== currentListingId,
  );

  const [watchlistedIds, setWatchlistedIds] = useState([]);

  const toggleWatchlist = (id) => {
    setWatchlistedIds((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id],
    );
  };

  const placeholderCards = [
    {
      _id: "placeholder-1",
      isPlaceholder: true,
      placeholderImage: "/seller-placeholder-car.png",
    },
    {
      _id: "placeholder-2",
      isPlaceholder: true,
      placeholderImage: "",
    },
    {
      _id: "placeholder-3",
      isPlaceholder: true,
      placeholderImage: "/seller-placeholder-bathroom.png",
    },
  ];

  const visibleSellerItems = sellerItems.slice(0, 4);
  const cardsToRender = [
    ...visibleSellerItems,
    ...placeholderCards.slice(0, Math.max(0, 4 - visibleSellerItems.length)),
  ];

  if (cardsToRender.length === 0) {
    return null;
  }

  return (
    <section className="seller-listings">
      <div className="seller-listings__inner">
        <h3 className="seller-listings__title">Seller&apos;s other listings</h3>

        <div className="seller-listings__grid">
          {cardsToRender.map((item) => {
            if (item.isPlaceholder) {
              return (
                <article
                  key={item._id}
                  className="seller-listings__card seller-listings__card--placeholder"
                >
                  <div className="seller-listings__placeholder">
                    {item.placeholderImage ? (
                      <img
                        className="seller-listings__placeholder-image"
                        src={item.placeholderImage}
                        alt=""
                        aria-hidden="true"
                      />
                    ) : null}
                  </div>
                </article>
              );
            }

            const image =
              item.images && item.images.length > 0
                ? item.images[0].startsWith("http")
                  ? item.images[0]
                  : `${apiBaseUrl}${item.images[0]}`
                : "";

            const isWatchlisted = watchlistedIds.includes(item._id);

            return (
              <article key={item._id} className="seller-listings__card">
                {image ? (
                  <div className="seller-listings__image-wrap">
                    <img
                      className="seller-listings__image"
                      src={image}
                      alt={item.title}
                    />

                    <button
                      type="button"
                      className="seller-listings__quickview"
                      aria-label={`Quick view ${item.title}`}
                    >
                      <img
                        className="seller-listings__corner-icon"
                        src="/quickview-icon.png"
                        alt=""
                        aria-hidden="true"
                      />
                    </button>

                    <button
                      type="button"
                      className="seller-listings__badge"
                      aria-label={
                        isWatchlisted
                          ? `Remove ${item.title} from watchlist`
                          : `Add ${item.title} to watchlist`
                      }
                      onClick={() => toggleWatchlist(item._id)}
                    >
                      <img
                        className="seller-listings__corner-icon"
                        src={
                          isWatchlisted
                            ? "/watchlist-minus.png"
                            : "/watchlist-plus.png"
                        }
                        alt=""
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                ) : (
                  <div className="seller-listings__placeholder">
                    <img
                      className="seller-listings__placeholder-image"
                      src="/seller-placeholder-car.png"
                      alt=""
                      aria-hidden="true"
                    />
                  </div>
                )}

                <div className="seller-listings__body">
                  <h4 className="seller-listings__card-title">{item.title}</h4>

                  <div className="seller-listings__price-row">
                    <span className="seller-listings__buy-now-label">
                      Buy now
                    </span>
                    <span className="seller-listings__price">
                      <span className="seller-listings__price-value">
                        ${Number(item.buyNowPrice || 0).toLocaleString()}
                      </span>
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SellerListings;
