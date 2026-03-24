import { useEffect, useState } from "react";
import "./ProductListing.css";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
// temporary fixed listing id for poc demo; replace with route param later
const LISTING_ID = "69be770b9f6980bd1337bd6b";
const LISTING_URL = `${API_BASE_URL}/api/listings/${LISTING_ID}`;
const BID_URL = `${LISTING_URL}/bid`;

function ProductListing() {
  const [listing, setListing] = useState(null);
  const [bidAmount, setBidAmount] = useState("");
  const [loading, setLoading] = useState(true);
  const [submittingBid, setSubmittingBid] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    async function fetchListing() {
      try {
        setError("");

        const response = await fetch(LISTING_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch listing");
        }

        const data = await response.json();
        setListing(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchListing();
  }, []);

  async function handlePlaceBid(event) {
    event.preventDefault();

    try {
      setSubmittingBid(true);
      setError("");
      setSuccessMessage("");

      const response = await fetch(BID_URL, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bidAmount,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to place bid");
      }

      setListing(data.listing);
      setSuccessMessage(data.message);
      setBidAmount("");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setSubmittingBid(false);
    }
  }

  if (loading) {
    return <div>Loading listing...</div>;
  }

  if (error && !listing) {
    return <div>Error: {error}</div>;
  }

  if (!listing) {
    return <div>No listing found.</div>;
  }

  return (
    <div className="product-listing-page">
      <h1>Product Listing Page</h1>

      <div className="listing-card">
        <img
          src={listing.image}
          alt={listing.title}
          className="listing-image"
        />

        <h2>{listing.title}</h2>
        <p>Current Bid: ${listing.currentBid}</p>

        <form className="bid-form" onSubmit={handlePlaceBid}>
          <label htmlFor="bidAmount">Enter your bid</label>
          <input
            id="bidAmount"
            type="number"
            min="1"
            step="1"
            value={bidAmount}
            onChange={(event) => setBidAmount(event.target.value)}
            placeholder="Enter a higher bid"
          />
          <button type="submit" disabled={submittingBid}>
            {submittingBid ? "Submitting..." : "Place Bid"}
          </button>
        </form>

        {successMessage && <p className="success-message">{successMessage}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}

export default ProductListing;