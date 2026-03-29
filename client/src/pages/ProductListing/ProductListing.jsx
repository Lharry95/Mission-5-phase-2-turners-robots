import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../common/layout/Header/Header";
import Footer from "../../common/layout/Footer/Footer";
import ProductGallery from "../../common/product/ProductGallery/ProductGallery";
import ProductMeta from "../../common/product/ProductMeta/ProductMeta";
import PriceCard from "../../common/product/PriceCard/PriceCard";
import BidForm from "../../common/product/BidForm/BidForm";
import BeforeYouBuy from "../../common/product/BeforeYouBuy/BeforeYouBuy";
import ProtectionCard from "../../common/product/ProtectionCard/ProtectionCard";
import ShippingCard from "../../common/product/ShippingCard/ShippingCard";
import SellerCard from "../../common/product/SellerCard/SellerCard";
import ProductAccordion from "../../common/product/ProductAccordion/ProductAccordion";
import RelatedListings from "../../common/product/RelatedListings/RelatedListings";
import Breadcrumbs from "../../common/layout/Breadcrumbs/Breadcrumbs";
import SellerListings from "../../common/product/SellerListings/SellerListings";
import ListingMeta from "../../common/product/ListingMeta/ListingMeta";
import "./ProductListing.css";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

function formatCurrency(value) {
  return `$${Number(value || 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function ProductListing() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [listing, setListing] = useState(null);
  const [allListings, setAllListings] = useState([]);
  const [bidAmount, setBidAmount] = useState("");
  const [loading, setLoading] = useState(true);
  const [submittingBid, setSubmittingBid] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const bidUrl = `${API_BASE_URL}/api/listings/${id}/bid`;

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError("");
        setSuccessMessage("");

        const [listingResponse, listingsResponse] = await Promise.all([
          fetch(`${API_BASE_URL}/api/listings/${id}`),
          fetch(`${API_BASE_URL}/api/listings`),
        ]);

        if (!listingResponse.ok) {
          throw new Error("Failed to fetch listing");
        }

        if (!listingsResponse.ok) {
          throw new Error("Failed to fetch listings");
        }

        const listingData = await listingResponse.json();
        const listingsData = await listingsResponse.json();

        setListing(listingData);
        setAllListings(listingsData);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchData();
    }
  }, [id]);

  const currentBidValue = Number(listing?.currentBid || 0);
  const startingPriceValue = Number(listing?.startingPrice || 0);
  const minimumBid = Math.max(currentBidValue, startingPriceValue);
  const numericBidAmount = Number(bidAmount);

  const isBidValid =
    bidAmount !== "" &&
    !Number.isNaN(numericBidAmount) &&
    numericBidAmount > minimumBid;

  async function handlePlaceBid(event) {
    event.preventDefault();

    try {
      setSubmittingBid(true);
      setError("");
      setSuccessMessage("");

      const response = await fetch(bidUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bidAmount: Number(bidAmount),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to place bid");
      }

      setListing(data.listing);
      setSuccessMessage(data.message || "Bid placed successfully");
      setBidAmount("");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setSubmittingBid(false);
    }
  }

  const listingImages = useMemo(() => {
    return (listing?.images || []).map((img) =>
      img.startsWith("http") ? img : `${API_BASE_URL}${img}`
    );
  }, [listing]);

  const formattedStartingPrice = useMemo(() => {
    return formatCurrency(listing?.startingPrice);
  }, [listing]);

  const formattedBuyNowPrice = useMemo(() => {
    return formatCurrency(listing?.buyNowPrice);
  }, [listing]);

  if (!id) return <div className="page-state">Missing listing id.</div>;
  if (loading) return <div className="page-state">Loading listing...</div>;
  if (error && !listing) return <div className="page-state">Error: {error}</div>;
  if (!listing) return <div className="page-state">No listing found.</div>;

  return (
    <>
      <Header />

      <main className="product-listing-page">
        <div className="pl-shell">
          <div className="pl-topbar">
            <button
              type="button"
              className="pl-back-link"
              onClick={() => navigate("/productlisting")}
            >
              <span className="pl-back-link__icon">‹</span>
              <span className="pl-back-link__text">Go back</span>
            </button>

            <Breadcrumbs />
          </div>

          <div className="pl-main">
            <div className="pl-left-column">
              <ProductGallery images={listingImages} title={listing.title} />
              <ProductMeta listing={listing} />
              <ProductAccordion listing={listing} />
              <BeforeYouBuy />
            </div>

            <div className="pl-right-column">
              <PriceCard
                listing={listing}
                formattedStartingPrice={formattedStartingPrice}
                formattedBuyNowPrice={formattedBuyNowPrice}
              />

              <BidForm
                bidAmount={bidAmount}
                setBidAmount={setBidAmount}
                handlePlaceBid={handlePlaceBid}
                submittingBid={submittingBid}
                isBidValid={isBidValid}
                successMessage={successMessage}
                error={error}
                listing={listing}
              />

              <ShippingCard />
              <ProtectionCard />
              <SellerCard listing={listing} />
            </div>
          </div>
        </div>

        <div className="pl-below-main">
          <div className="pl-below-main__inner">
            <ListingMeta />
          </div>
        </div>

        <div className="pl-seller-related-band">
          <div className="pl-seller-related-inner">
            <div className="pl-seller-listings-center">
              <SellerListings
                listings={allListings}
                currentListingId={listing._id}
                sellerName={listing.sellerName}
                apiBaseUrl={API_BASE_URL}
              />
            </div>

            <div className="pl-related-listings-center">
              <RelatedListings />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ProductListing;