function SellerCard({ listing }) {
  return (
    <div className="info-card">
      <h3 className="info-card__title">Seller</h3>
      <p className="info-card__text">{listing?.sellerName || "Turners Seller"}</p>
    </div>
  );
}

export default SellerCard;