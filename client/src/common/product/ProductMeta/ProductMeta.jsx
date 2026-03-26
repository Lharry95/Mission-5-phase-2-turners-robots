function ProductMeta({ listing }) {
  return (
    <div className="meta-card">
      <h2 className="meta-card__title">{listing.title}</h2>
      <p className="meta-card__text">{listing.description || "No description yet."}</p>
    </div>
  );
}

export default ProductMeta;