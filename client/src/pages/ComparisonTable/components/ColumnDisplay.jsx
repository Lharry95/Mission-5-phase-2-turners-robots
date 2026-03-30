import { useNavigate, useLocation, Link } from "react-router-dom";

import { useState } from "react";
import styles from "./ColumnDisplay.module.css";
import addProductBtn from "../../../assets/add-product-icon.png";
import { useEffect } from "react";
import nextListingIcon from "../../../assets/icons/Next-listing.png";
import prevListingIcon from "../../../assets/icons/previous-listing.png";
import goBackBtn from "../../../assets/icons/go-back-btn.png";
import RemoveItemButton from "./RemoveItemButton";

function ColumnDisplay({ data, category }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize from localStorage FIRST
  const [comparisonSlots, setComparisonSlots] = useState(() => {
    const saved = localStorage.getItem(`comparison_${category}`);

    try {
      return saved ? JSON.parse(saved) : [null, null, null, null];
    } catch (error) {
      console.error("Invalid localStorage data:", saved);
      return [null, null, null, null];
    }
  });

  const updateSlots = (updater) => {
    setComparisonSlots((prevSlots) => {
      const newSlots =
        typeof updater === "function" ? updater(prevSlots) : updater;

      localStorage.setItem(`comparison_${category}`, JSON.stringify(newSlots));

      return newSlots;
    });
  };

  // pull item from product listing page into specific slot
  useEffect(() => {
    if (
      // was item received?
      location.state?.selectedItem &&
      // did we receive which slot it's supposed to go in?
      location.state?.slotIndex !== undefined
    ) {
      // get values from location state
      const { selectedItem, slotIndex } = location.state;

      // makes sure id field exists
      // Handle missing image field
      const transformedItem = {
        ...selectedItem,
        _id: selectedItem._id,
        id: selectedItem._id || selectedItem.id,
        image: selectedItem.image || "/uploads/placeholder.png",
      };
      console.log("location.state:", location.state);

      updateSlots((prevSlots) => {
        const updatedSlots = [...prevSlots];
        updatedSlots[slotIndex] = transformedItem;

        return updatedSlots;
      });
    }
  }, [location.state]);

  // when add product button is clicked - sends to search results page and directly to the category that was chosen in the comparison page.
  function handleGoToSearch(slotIndex) {
    navigate(
      `/searchresults/?q=${encodeURIComponent(
        category
      )}&slotIndex=${slotIndex}&category=${encodeURIComponent(category)}`
    );
  }

  const filledColumns = comparisonSlots.filter((slot) => slot !== null).length;

  return (
    <div>
      <div className={styles.headerTitles}>
        <p className={styles.comparisonTablePaths}>
          <span> Home / Marketplace / Comparison Table</span> / {category}
        </p>
        <h1 className={styles.comparisonTableHeader1}>
          COMPARISON TABLE: <span className={styles.desks}>{category}</span>
        </h1>

        <Link to="/comparison" className={styles.linkBackToLandingPage}>
          <button className={styles.goBackBtn}>
            {<img src={goBackBtn} alt="Go Back" />} Go back
          </button>
        </Link>
      </div>

      <div className={styles.mobileTableWrapper}>
        <div className={styles.comparisonScroll} id="comparisonScroll">
          <div className={styles.comparisonContainer}>
            {/* maps over columns, if empty include the add product button else include item and remove button  */}
            {comparisonSlots.map((slot, index) => (
              <div key={index} className={styles.comparisonCard}>
                {slot ? (
                  <div>
                    <RemoveItemButton
                      slotIndex={index}
                      comparisonSlots={comparisonSlots}
                      setComparisonSlots={updateSlots}
                    />
                    <h2>{slot.title}</h2>
                    <img
                      className={styles.productImage}
                      src={slot.images || "/uploads/placeholder.png"} // ← Change this
                      alt={slot.title}
                      onError={(e) => {
                        e.target.src = "/uploads/placeholder.png";
                      }}
                    />

                    <p>
                      <strong>Buy now</strong>
                      <br />${slot.buyNowPrice}
                    </p>
                    <p>
                      <strong>Condition:</strong> {slot.condition}
                    </p>
                    <p>
                      <strong>Dimensions:</strong> {slot.dimensions}
                    </p>
                    <p>
                      <strong>Shipping:</strong> {slot.shipping_and_pickup}
                    </p>
                    <p>
                      <strong>Payment:</strong> {slot.payment_options}
                    </p>
                    <button
                      className={styles.viewDetailsBtn}
                      onClick={() =>
                        navigate(`/productlisting/${slot._id}`, {
                          state: { from: "comparison" },
                        })
                      }
                    >
                      <p className={styles.fullDetailsBtn}>View Full Details</p>
                    </button>
                  </div>
                ) : (
                  <button
                    className={styles.addProductBtn}
                    onClick={() => handleGoToSearch(index)}
                  >
                    {" "}
                    {<img src={addProductBtn} alt="add product" />} <br />
                    Add Product
                    <p
                      className={styles.btnPara}
                    >{`${filledColumns}/4 added`}</p>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <button
          className={styles.prevBtn}
          onClick={() => {
            const container = document.getElementById("comparisonScroll");
            container.scrollBy({ left: -320, behavior: "smooth" });
          }}
        >
          {<img src={prevListingIcon} alt="previous listing" />}
        </button>
        <button
          className={styles.nextBtn}
          onClick={() => {
            const container = document.getElementById("comparisonScroll");
            container.scrollBy({ left: 320, behavior: "smooth" });
          }}
        >
          {<img src={nextListingIcon} alt="next listing" />}
        </button>
      </div>
    </div>
  );
}

export default ColumnDisplay;
