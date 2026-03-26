function ProductAccordion({ listing }) {
  return (
    <div className="info-card">
      <h3 className="info-card__title">Product details</h3>
      <p className="info-card__text">Condition: {listing?.condition || "Used"}</p>
      <p className="info-card__text">Category: {listing?.category || "Vehicle"}</p>
    </div>
  );
}

export default ProductAccordion;