import { useState } from "react";
import "./RelatedListings.css";

const RELATED_ITEMS = [
  {
    id: "related-1",
    title: "20th Century Wooden Desk",
    price: "$110",
    image: "http://localhost:3000/uploads/related-listing-desk-1.jpg",
    description:
      "Beautifully aged wooden desk with a balanced double-pedestal design. A great piece for fans of mid-century or 20th-century decor. Solid construction and timeless look.",
  },
  {
    id: "related-2",
    title: "Corner Desk with Cabinets",
    price: "$150",
    image: "http://localhost:3000/uploads/related-listing-desk-2.jpg",
    description:
      "The ultimate ergonomic setup. This corner unit features built-in side cabinets and a pull-out keyboard tray to keep your desktop clutter-free. Perfect for gamers or home office pros.",
  },
  {
    id: "related-3",
    title: "Vintage Wooden Desk",
    price: "$220",
    image: "http://localhost:3000/uploads/related-listing-desk-3.jpg",
    description:
      "A high-quality vintage piece with a unique curved knee-hole design. Features six drawers and a beautifully polished grain. This is a heavy-duty, forever desk that looks great in a study or library.",
  },
  {
    id: "related-4",
    title: "Oak Desk",
    price: "$300",
    image: "http://localhost:3000/uploads/related-listing-desk-4.jpg",
    description:
      "Elegant, contemporary oak desk with slim legs and three sleek drawers. The light wood grain is stunning and fits perfectly with Scandi or modern minimalist decor. Could also be used as a premium console table in an entryway.",
  },
  {
    id: "related-5",
    title: "Solid Rimu Desk",
    price: "$40.00",
    image: "http://localhost:3000/uploads/related-listing-desk-5.jpg",
    description:
      "You can’t beat the warmth of Rimu. This desk is built to last with four deep drawers on the left and a clean open space on the right. Ideal for students or as a dedicated crafting station.",
  },
  {
    id: "related-6",
    title: "Large Desk",
    price: "$100",
    image: "http://localhost:3000/uploads/related-listing-desk-6.jpg",
    description:
      "A substantial desk for those who like to spread out. Massive storage capacity with eight drawers in total. Traditional aesthetic that adds a professional feel to any room.",
  },
];

function RelatedListings() {
  const [watchlistedIds, setWatchlistedIds] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);

  const pageSize = 4;
  const pages = Array.from(
    { length: Math.ceil(RELATED_ITEMS.length / pageSize) },
    (_, index) =>
      RELATED_ITEMS.slice(index * pageSize, index * pageSize + pageSize)
  );

  const visibleItems = pages[pageIndex] || [];
  const isFirstPage = pageIndex === 0;
  const isLastPage = pageIndex === pages.length - 1;

  const toggleWatchlist = (id) => {
    setWatchlistedIds((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id]
    );
  };

  const showPrevious = () => {
    setPageIndex((prev) => Math.max(0, prev - 1));
  };

  const showNext = () => {
    setPageIndex((prev) => Math.min(pages.length - 1, prev + 1));
  };

  return (
    <section className="related-listings" aria-label="Other listings you may like">
      <div className="related-listings__inner">
        <h3 className="related-listings__title">Other listings you may like</h3>

        <div className="related-listings__carousel">
          <button
            type="button"
            className="related-listings__nav related-listings__nav--left"
            onClick={showPrevious}
            disabled={isFirstPage}
            aria-label="Previous listings"
          >
            &#8249;
          </button>

          <div
            className={`related-listings__grid ${
              visibleItems.length === 2 ? "related-listings__grid--two" : ""
            }`}
          >
            {visibleItems.map((item) => {
              const isWatchlisted = watchlistedIds.includes(item.id);

              return (
                <article key={item.id} className="related-listings__card">
                  <div className="related-listings__image-wrap">
                    <img
                      className="related-listings__image"
                      src={item.image}
                      alt={item.title}
                    />

                    <button
                      type="button"
                      className="related-listings__quickview"
                      aria-label={`Quick view ${item.title}`}
                    >
                      <img
                        className="related-listings__corner-icon related-listings__corner-icon--left"
                        src="/quickview-icon.png"
                        alt=""
                        aria-hidden="true"
                      />
                    </button>

                    <button
                      type="button"
                      className="related-listings__badge"
                      aria-label={
                        isWatchlisted
                          ? `Remove ${item.title} from watchlist`
                          : `Add ${item.title} to watchlist`
                      }
                      aria-pressed={isWatchlisted}
                      onClick={() => toggleWatchlist(item.id)}
                    >
                      <img
                        className="related-listings__corner-icon related-listings__corner-icon--right"
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

                  <div className="related-listings__body">
                    <h4 className="related-listings__card-title">{item.title}</h4>
                    <p className="related-listings__description">{item.description}</p>

                    <div className="related-listings__price-row">
                      <span className="related-listings__buy-now-label">Buy now</span>
                      <span className="related-listings__price">
                        <span className="related-listings__price-value">
                          {item.price}
                        </span>
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <button
            type="button"
            className="related-listings__nav related-listings__nav--right"
            onClick={showNext}
            disabled={isLastPage}
            aria-label="Next listings"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}

export default RelatedListings;