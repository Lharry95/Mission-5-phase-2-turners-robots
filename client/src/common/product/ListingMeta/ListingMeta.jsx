import "./ListingMeta.css";

function ListingMeta() {
  return (
    <section className="listing-meta" aria-label="Listing meta">
      <div className="listing-meta__top">
        <a href="#" className="listing-meta__share">
          <img
            className="listing-meta__share-icon"
            src="/share-icon-placeholder.png"
            alt=""
            aria-hidden="true"
          />
          <span className="listing-meta__share-text">Share this listing</span>
        </a>

        <span className="listing-meta__dot" aria-hidden="true" />
        <span className="listing-meta__text">Page views: ###</span>
        <span className="listing-meta__dot" aria-hidden="true" />
        <span className="listing-meta__text">Listing ###########</span>
      </div>

      <div className="listing-meta__bottom">
        <img
          className="listing-meta__watch-icon"
          src="/community-watch-icon-placeholder.png"
          alt=""
          aria-hidden="true"
        />
        <p className="listing-meta__watch-text">
          Community Watch:{" "}
          <a href="#" className="listing-meta__report-link">
            Report this listing
          </a>
        </p>
      </div>
    </section>
  );
}

export default ListingMeta;