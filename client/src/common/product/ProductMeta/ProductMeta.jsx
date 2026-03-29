import { useState } from "react";
import "./ProductMeta.css";

function ProductMeta() {
  const [open, setOpen] = useState(false);
  const panelId = "product-meta-panel";

  return (
    <div className="product-meta-wrap">
      <button
        type="button"
        className="product-meta"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className="product-meta__left">
          <img
            className="product-meta__icon"
            src="/ai-summary-icon-placeholder.png"
            alt=""
            aria-hidden="true"
          />
          <span className="product-meta__text">AI Summary</span>
        </span>

        <span className={`product-meta__arrow ${open ? "is-open" : ""}`}>
          ›
        </span>
      </button>

      {open && (
        <div className="product-meta__panel" id={panelId}>
          <div className="product-meta__panel-header">
            <img
              className="product-meta__icon"
              src="/ai-summary-icon-placeholder.png"
              alt=""
              aria-hidden="true"
            />
            <span className="product-meta__text">AI Summary</span>
          </div>

          <p className="product-meta__panel-text">
            Vintage demi-lune console desk with a classic Queen Anne–style
            design, likely crafted from mahogany. Features a curved half-moon
            shape with a central drawer and is in excellent, well-maintained
            condition.
            <br />
            <br />
            Dimensions: 75 × 75 × 34 cm. Pick-up available in Te Kamo,
            Whangārei or buyer-arranged freight.
          </p>
        </div>
      )}
    </div>
  );
}

export default ProductMeta;