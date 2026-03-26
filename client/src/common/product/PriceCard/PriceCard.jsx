function PriceCard({ listing, formattedStartingPrice, formattedBuyNowPrice }) {
  return (
    <div className="price-card">
      <h1 className="price-card__title">{listing.title}</h1>

      <p className="price-card__label">Buy now</p>
      <h2 className="price-card__value">{formattedBuyNowPrice}</h2>

      <p className="price-card__label">Starting price</p>
      <h3 className="price-card__value">{formattedStartingPrice}</h3>
    </div>
  );
}

export default PriceCard;