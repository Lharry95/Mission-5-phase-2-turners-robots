import { useState } from "react";
import "./ProductGallery.css";

function ProductGallery({ images = [], title }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const safeSelectedIndex =
    images.length === 0 ? 0 : Math.min(selectedIndex, images.length - 1);

  const selectedImage = images[safeSelectedIndex];
  const hasMultipleImages = images.length > 1;

  function showPrevious() {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function showNext() {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  return (
    <div className="product-gallery">
      <div className="product-gallery__main">
        {hasMultipleImages && (
          <>
            <button
              type="button"
              className="product-gallery__arrow product-gallery__arrow--left"
              onClick={showPrevious}
              aria-label="Previous image"
            >
              <img
                className="product-gallery__arrow-box product-gallery__arrow-box--default"
                src="/gallery-arrow-left-default.png"
                alt=""
                aria-hidden="true"
              />
              <img
                className="product-gallery__arrow-box product-gallery__arrow-box--hover"
                src="/gallery-arrow-left-hover.png"
                alt=""
                aria-hidden="true"
              />
            </button>

            <button
              type="button"
              className="product-gallery__arrow product-gallery__arrow--right"
              onClick={showNext}
              aria-label="Next image"
            >
              <img
                className="product-gallery__arrow-box product-gallery__arrow-box--default"
                src="/gallery-arrow-left-default.png"
                alt=""
                aria-hidden="true"
              />
              <img
                className="product-gallery__arrow-box product-gallery__arrow-box--hover"
                src="/gallery-arrow-left-hover.png"
                alt=""
                aria-hidden="true"
              />
            </button>
          </>
        )}

        {selectedImage ? (
          <img
            className="product-gallery__main-image"
            src={selectedImage}
            alt={title}
          />
        ) : (
          <div className="product-gallery__placeholder">No image available</div>
        )}

        <button type="button" className="product-gallery__overlay">
          <img
            className="product-gallery__overlay-icon"
            src="/magnifying-glass-placeholder.png"
            alt=""
            aria-hidden="true"
          />
          <span>Open Gallery</span>
        </button>
      </div>

      {hasMultipleImages && (
        <div className="product-gallery__thumbs">
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              className={`product-gallery__thumb ${
                index === safeSelectedIndex ? "product-gallery__thumb--active" : ""
              }`}
              onClick={() => setSelectedIndex(index)}
              aria-label={`View image ${index + 1}`}
              aria-pressed={index === safeSelectedIndex}
            >
              <img src={image} alt={`${title} ${index + 1}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductGallery;