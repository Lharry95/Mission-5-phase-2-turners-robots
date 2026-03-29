import "./SellerCard.css";

function SellerCard() {
  return (
    <section className="seller-card" aria-label="Seller information">
      <div className="seller-card__top">
        <img
          className="seller-card__avatar"
          src="/seller-avatar-placeholder.png"
          alt=""
          aria-hidden="true"
        />

        <div className="seller-card__details">
          <h3 className="seller-card__name">
            sellername <span className="seller-card__meta">(123⭐)</span>
          </h3>

          <p className="seller-card__feedback">
            <strong>99.5%</strong> positive feedback
          </p>

          <p className="seller-card__location">
            Seller located in Auckland, NZ
          </p>
        </div>
      </div>

      <a href="#" className="seller-card__link">
        View seller&apos;s other listings
      </a>

      <button type="button" className="seller-card__button">
        <img
          className="seller-card__button-icon"
          src="/favourite-seller-icon.png"
          alt=""
          aria-hidden="true"
        />
        <span>Add to Favourite Sellers</span>
      </button>
    </section>
  );
}

export default SellerCard;