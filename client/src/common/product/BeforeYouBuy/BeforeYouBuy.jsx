import "./BeforeYouBuy.css";

function BeforeYouBuy() {
  return (
    <section className="before-buy" aria-label="Before you buy">
      <h2 className="before-buy__title">Before you buy</h2>

      <div className="before-buy__card">
        <div className="before-buy__left">
          <div className="before-buy__text-group">
            <p className="before-buy__text before-buy__text--top">
              Contents insurance
            </p>

            <p className="before-buy__text before-buy__text--bottom">
              Calculate contents insurance costs and get 15% off with Trade Me.
            </p>
          </div>

          <img
            className="before-buy__logo"
            src="/contents-insurance-logo-placeholder.png"
            alt=""
            aria-hidden="true"
          />
        </div>

        <div className="before-buy__divider" />

        <a href="#" className="before-buy__link">
          <span className="before-buy__link-text">Get quote</span>
          <img
            className="before-buy__link-icon"
            src="/external-link-icon-placeholder.png"
            alt=""
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
}

export default BeforeYouBuy;