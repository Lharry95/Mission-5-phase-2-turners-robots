import { useState } from "react";
import "./ProductAccordion.css";

function ProductAccordion() {
  const [openSection, setOpenSection] = useState("description");

  const rows = [
    { key: "condition", label: "Condition", value: "Used", expandable: false },
    { key: "description", label: "Description", expandable: true },
    { key: "shipping", label: "Shipping & pick-up options", expandable: true },
    { key: "payment", label: "Payment Options", expandable: true },
    { key: "qa", label: "Questions & Answers", expandable: true },
  ];

  const toggleRow = (key, expandable) => {
    if (!expandable) return;
    setOpenSection((prev) => (prev === key ? null : key));
  };

  return (
    <section className="product-accordion">
      <div className="product-accordion__header">Product Details</div>

      {rows.map((row) => {
        const isOpen = openSection === row.key;
        const panelId = `product-accordion-panel-${row.key}`;

        return (
          <div key={row.key}>
            <button
              type="button"
              className={`product-accordion__row ${
                isOpen ? "product-accordion__row--open" : ""
              }`}
              onClick={() => toggleRow(row.key, row.expandable)}
              aria-expanded={row.expandable ? isOpen : undefined}
              aria-controls={row.expandable ? panelId : undefined}
            >
              <span
                className={`product-accordion__label ${
                  isOpen ? "product-accordion__label--active" : ""
                }`}
              >
                {row.label}
              </span>

              {row.value && (
                <span className="product-accordion__value">{row.value}</span>
              )}

              {row.expandable && (
                <span
                  className={`product-accordion__chevron ${
                    isOpen
                      ? "product-accordion__chevron--open"
                      : "product-accordion__chevron--closed"
                  }`}
                  aria-hidden="true"
                >
                  ›
                </span>
              )}
            </button>

            {isOpen && row.key === "description" && (
              <div className="product-accordion__description-panel" id={panelId}>
                <p className="product-accordion__description-text">
                  Purchased from Chandler House, Hamilton, back in 1972, a back
                  catalogue order; wait time 3 months. Believed French
                  Provincial, but recent advice is Queen Anne, GB, mahogany.
                  Excellent condition, free of scratches. Lovingly cared for.
                  <br />
                  <br />
                  Dimensions:
                  <br />
                  W 75cms
                  <br />
                  H 75cms
                  <br />
                  D 34cms
                  <br />
                  <br />
                  The last photo shows an example of a similar vintage design of
                  two virtually identical English tables in oak, but without the
                  central drawer. A purchaser can collect in Te Kamo, Whangārei
                  or arrange their own freight.
                  <br />
                  I am happy to cooperate with your freight arrangement, however
                  you may direct.
                  <br />
                  No post-auction fixed offers are made by this seller.
                </p>
              </div>
            )}

            {isOpen && row.key === "shipping" && (
              <div className="product-accordion__shipping-panel" id={panelId}>
                <div className="product-accordion__shipping-table">
                  <div className="product-accordion__shipping-head">
                    <span>Destination &amp; description</span>
                    <span>Price</span>
                  </div>

                  <div className="product-accordion__shipping-item">
                    <span>Shipping description...</span>
                    <span>$$$</span>
                  </div>

                  <div className="product-accordion__shipping-item">
                    <span>Shipping description...</span>
                    <span>$$$</span>
                  </div>
                </div>

                <div className="product-accordion__shipping-note">
                  <img
                    className="product-accordion__shipping-note-bar"
                    src="/shipping-note-bar-placeholder.png"
                    alt=""
                    aria-hidden="true"
                  />
                  <a href="#" className="product-accordion__shipping-note-link">
                    Learn more about shipping &amp; delivery options.
                  </a>
                </div>
              </div>
            )}

            {isOpen && row.key === "payment" && (
              <div className="product-accordion__payment-panel" id={panelId}>
                <div className="product-accordion__payment-left">
                  <img
                    className="product-accordion__ping-logo"
                    src="/ping-logo-placeholder.png"
                    alt=""
                    aria-hidden="true"
                  />
                  <p className="product-accordion__payment-text">
                    Pay instantly by card and Ping balance.
                  </p>
                  <a href="#" className="product-accordion__payment-link">
                    What&apos;s Ping?
                  </a>
                </div>

                <div className="product-accordion__payment-right">
                  <h4 className="product-accordion__payment-heading">
                    Other options
                  </h4>
                  <p className="product-accordion__payment-text">
                    Cash, NZ Bank Deposit
                  </p>
                </div>
              </div>
            )}

            {isOpen && row.key === "qa" && (
              <div className="product-accordion__qa-panel" id={panelId}>
                <button
                  type="button"
                  className="product-accordion__qa-button"
                >
                  Ask a question
                </button>

                <p className="product-accordion__qa-empty">
                  No questions have been asked!
                </p>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default ProductAccordion;