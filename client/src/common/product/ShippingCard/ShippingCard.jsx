import "./ShippingCard.css";

function ShippingCard() {
  return (
    <section className="shipping-card" aria-label="Shipping information">
      <div className="shipping-card__row">
        <img
          className="shipping-card__icon"
          src="/shipping-unavailable-icon-placeholder.png"
          alt=""
          aria-hidden="true"
        />
        <span className="shipping-card__text">
          Shipping unavailable, buyer must pick-up
        </span>
      </div>

      <div className="shipping-card__row">
        <img
          className="shipping-card__icon"
          src="/pickup-icon-placeholder.png"
          alt=""
          aria-hidden="true"
        />
        <span className="shipping-card__text">
          Pick up available, Whangarei, Northland
        </span>
      </div>
    </section>
  );
}

export default ShippingCard;