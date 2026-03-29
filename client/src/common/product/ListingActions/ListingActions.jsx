import { useState } from "react";
import "./ListingActions.css";

function ListingActions() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [added, setAdded] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const panelId = "listing-actions-panel";

  const handleToggle = () => {
    setOpen((prev) => !prev);
    setAdded(false);
    setIsFocused(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    setAdded(false);
  };

  const handleSubmit = () => {
    if (!value.trim()) return;
    setAdded(true);
    setIsFocused(false);
  };

  const showGhostTick = isFocused && !added;
  const showBlueTick = added;

  return (
    <div
      className={[
        "listing-actions",
        open ? "listing-actions--open" : "",
        added ? "listing-actions--added" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <button
        type="button"
        className="listing-actions__button"
        onClick={handleToggle}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <img
          className="listing-actions__icon-img"
          src="/comparison-button-icon.png"
          alt=""
          aria-hidden="true"
        />

        <span className="listing-actions__label">
          Add to Comparison Table
        </span>

        <span className="listing-actions__chevron" aria-hidden="true">
          {open ? "⌄" : "›"}
        </span>
      </button>

      {open && (
        <div className="listing-actions__panel" id={panelId}>
          <div className="listing-actions__row">
            <div className="listing-actions__row-label">
              Create new category
            </div>

            <div className="listing-actions__input-wrap">
              <input
                type="text"
                className="listing-actions__input"
                value={value}
                onChange={handleChange}
                onFocus={() => {
                  setIsFocused(true);
                  setAdded(false);
                }}
                onBlur={() => {
                  if (!added) {
                    setIsFocused(false);
                  }
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    handleSubmit();
                  }
                }}
                aria-label="Create new comparison category"
              />

              <button
                type="button"
                className="listing-actions__action-btn"
                onClick={handleSubmit}
                disabled={!value.trim()}
                aria-label="Add category"
              >
                {showBlueTick ? (
                  <img
                    className="listing-actions__tick-icon"
                    src="/tick-blue-placeholder.png"
                    alt=""
                    aria-hidden="true"
                  />
                ) : showGhostTick ? (
                  <img
                    className="listing-actions__tick-icon listing-actions__tick-icon--ghost"
                    src="/tick-grey-placeholder.png"
                    alt=""
                    aria-hidden="true"
                  />
                ) : (
                  "+"
                )}
              </button>
            </div>
          </div>

          {added && (
            <div className="listing-actions__success">
              <span className="listing-actions__success-link">Added to</span>{" "}
              {value}!
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ListingActions;