function ProductGallery({ images = [], title }) {
  const firstImage = images[0];

  return (
    <div className="gallery-card">
      {firstImage ? (
        <img className="gallery-card__image" src={firstImage} alt={title} />
      ) : (
        <div className="gallery-card__placeholder">No image available</div>
      )}
    </div>
  );
}

export default ProductGallery;