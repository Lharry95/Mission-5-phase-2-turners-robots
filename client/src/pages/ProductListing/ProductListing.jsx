import { useEffect, useState } from "react";
import "./ProductListing.css";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
// temporary fixed listing id for poc demo; replace with dynamic route param later
const LISTING_URL = `${API_BASE_URL}/api/listings/1`;

function ProductListing() {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchListing() {
      try {
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

  if (loading) {
    return <div>Loading listing...</div>;
  }

  if (error) {
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
      </div>
    </div>
  );
}

export default ProductListing;