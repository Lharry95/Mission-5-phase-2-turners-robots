import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./ColumnDisplay.module.css";
import addProductBtn from "../../../assets/add-product-icon.png";
import nextListingIcon from "../../../assets/icons/Next-listing.png";
import prevListingIcon from "../../../assets/icons/previous-listing.png";
import goBackBtn from "../../../assets/icons/go-back-btn.png";
import RemoveItemButton from "./RemoveItemButton";

function ColumnDisplay({ data = [], category }) {
  const navigate = useNavigate();
  const location = useLocation();

  // fixes data so consistent
  function transformItem(item) {
    const BACKEND_URL = "http://localhost:3000";

    return {
      ...item,
      _id: item._id,
      id: item._id || item.id,
      // if there's different names from the database
      title: item.title || item.name || "Untitled item",
      buyNowPrice: item.buyNowPrice ?? item.price ?? "0.00",

      // handle different image formats safely
      image: (() => {
        let imagePath =
          item.image ||
          (Array.isArray(item.images) ? item.images[0] : item.images) ||
          "/uploads/placeholder.png";

        // If it's a relative path (starts with /), prepend backend URL
        if (imagePath && !imagePath.startsWith("http")) {
          imagePath = BACKEND_URL + imagePath;
        }
        return imagePath;
      })(),

      // prevents undefined errors
      condition: item.condition ?? "",
      dimensions: item.dimensions ?? "",
      shipping_and_pickup: item.shipping_and_pickup ?? "",
      payment_options: item.payment_options ?? "",
    };
  }

  // getting two items from db
  const fixedDbItems = [data[1], data[2]]
    .filter((item) => item)
    .map((item) => transformItem(item));

  // load from local storage - if there's already items selected then it restores them
  const [comparisonSlots, setComparisonSlots] = useState(() => {
    const saved = localStorage.getItem(`comparison_${category}`);

    try {
      // if nothing's saved start with four empty slots
      const parsed = saved ? JSON.parse(saved) : [null, null, null, null];
      return Array.isArray(parsed) && parsed.length === 4
        ? parsed
        : [null, null, null, null];
    } catch (error) {
      console.error("Invalid localStorage data:", saved);
      return [null, null, null, null];
    }
  });

  // save to local storage whenever its updated
  const updateSlots = (updater) => {
    setComparisonSlots((prevSlots) => {
      const newSlots =
        typeof updater === "function" ? updater(prevSlots) : updater;

      localStorage.setItem(`comparison_${category}`, JSON.stringify(newSlots));
      return newSlots;
    });
  };

  // autofill first 2 columns from DB if they are empty
  useEffect(() => {
    if (fixedDbItems.length === 0) return;

    updateSlots((prevSlots) => {
      const updatedSlots = [...prevSlots];

      if (!updatedSlots[0] && fixedDbItems[0]) {
        updatedSlots[0] = fixedDbItems[0];
      }

      if (!updatedSlots[1] && fixedDbItems[1]) {
        updatedSlots[1] = fixedDbItems[1];
      }

      return updatedSlots;
    });
  }, [data, category]);

  // pull item from product page into selected slot
  useEffect(() => {
    if (
      location.state?.selectedItem &&
      location.state?.slotIndex !== undefined
    ) {
      const { selectedItem, slotIndex } = location.state;
      const transformedItem = transformItem(selectedItem);

      updateSlots((prevSlots) => {
        const updatedSlots = [...prevSlots];
        updatedSlots[slotIndex] = transformedItem;
        return updatedSlots;
      });
    }
  }, [location.state]);

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
            <img src={goBackBtn} alt="Go Back" /> Go back
          </button>
        </Link>
      </div>

      <div className={styles.mobileTableWrapper}>
        <div className={styles.comparisonScroll} id="comparisonScroll">
          <div className={styles.comparisonContainer}>
            {comparisonSlots.map((slot, index) => (
              <div
                key={index}
                className={`${styles.comparisonCard} ${
                  index === 0 ? styles.firstCard : styles.otherCard
                }`}
              >
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
                      src={slot.image}
                      alt={slot.title}
                      onError={(e) => {
                        e.target.src = "/uploads/placeholder.png";
                      }}
                    />

                    <p>
                      <strong>Buy now</strong>
                      <br />
                      <span className={styles.buyNow}>{slot.buyNowPrice}</span>
                    </p>

                    <p>
                      {index === 0 && <strong>Condition:</strong>}{" "}
                      {slot.condition}
                    </p>

                    <p>
                      {index === 0 && <strong>Dimensions:</strong>}{" "}
                      {slot.dimensions}
                    </p>

                    <p>
                      {index === 0 && <strong>Shipping & pick-up:</strong>}{" "}
                      {slot.shipping_and_pickup}
                    </p>

                    <p>
                      {index === 0 && <strong>Payment Options:</strong>}{" "}
                      {slot.payment_options}
                    </p>

                    <button
                      className={styles.viewDetailsBtn}
                      onClick={() =>
                        navigate(`/productlisting/${slot._id}`, {
                          state: { from: "comparison" },
                        })
                      }
                    >
                      View Full Details
                    </button>
                  </div>
                ) : (
                  <button
                    className={styles.addProductBtn}
                    onClick={() => handleGoToSearch(index)}
                  >
                    <img src={addProductBtn} alt="add product" />
                    <br />
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
          <img src={prevListingIcon} alt="previous listing" />
        </button>

        <button
          className={styles.nextBtn}
          onClick={() => {
            const container = document.getElementById("comparisonScroll");
            container.scrollBy({ left: 320, behavior: "smooth" });
          }}
        >
          <img src={nextListingIcon} alt="next listing" />
        </button>
      </div>
    </div>
  );
}

export default ColumnDisplay;
