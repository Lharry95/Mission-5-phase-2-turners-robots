import "./BidForm.css";

function BidForm({
  bidAmount,
  setBidAmount,
  handlePlaceBid,
  submittingBid,
  isBidValid,
  successMessage,
  error,
  listing,
}) {
  const inputValue = String(bidAmount ?? "");
  const hasValue = inputValue.trim().length > 0;
  const buttonIsActive = hasValue && isBidValid && !submittingBid;

  const handleInputChange = (event) => {
    const rawValue = event.target.value;
    const sanitizedValue = rawValue
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*)\./g, "$1");

    setBidAmount(sanitizedValue);
  };

  const startingPrice = Number(listing?.startingPrice ?? 0);
  const currentBid = Number(listing?.currentBid ?? 0);
  const minimumBidDisplay =
    currentBid > 0 ? currentBid.toFixed(2) : startingPrice.toFixed(2);

  const bidStatusText = currentBid > 0 ? "Bidding has started" : "No bids yet";

  return (
    <form className="bid-form" onSubmit={handlePlaceBid}>
      <p className="bid-form__min-bid">Min. starting bid: ${minimumBidDisplay}</p>

      <div className="bid-form__row">
        <input
          type="text"
          inputMode="decimal"
          className={`bid-form__input ${hasValue ? "bid-form__input--filled" : ""}`}
          value={inputValue}
          onChange={handleInputChange}
          aria-label="Bid amount"
        />

        <button
          type="submit"
          className={`bid-form__button ${buttonIsActive ? "bid-form__button--active" : ""}`}
          disabled={!buttonIsActive}
        >
          {submittingBid ? "Placing..." : "Place bid"}
        </button>
      </div>

      <p className="bid-form__note">
        No reserve
        <br />
        {bidStatusText}
      </p>

      {(error || successMessage) && (
        <p className={successMessage ? "bid-form__success" : "bid-form__error"}>
          {successMessage || error}
        </p>
      )}

      <div className="bid-form__divider" />

      <p className="bid-form__offer-title">This seller is open to offers</p>

      <button type="button" className="bid-form__offer-button">
        Make an offer
      </button>
    </form>
  );
}

export default BidForm;