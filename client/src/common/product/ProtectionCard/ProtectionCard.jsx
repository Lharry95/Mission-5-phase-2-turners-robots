import "./ProtectionCard.css";

function ProtectionCard() {
  return (
    <section className="protection-card" aria-label="Buyer Protection">
      <div className="protection-card__inner">
        <img
          className="protection-card__icon"
          src="/buyer-protection-icon.png"
          alt=""
          aria-hidden="true"
        />

        <div className="protection-card__content">
          <h3 className="protection-card__title">
            Am I covered by Buyer Protection?
          </h3>

          <p className="protection-card__text">
            When you make a purchase using any <strong>Ping payments like Card or Balance, or Afterpay</strong> we are able to protect your trade under our Buyer Protection policy, up to $5,000.
          </p>

          <p className="protection-card__link-text">
            Learn more about{" "}
            <a href="#" className="protection-card__link">
              Trade Me&apos;s Buyer Protection
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProtectionCard;