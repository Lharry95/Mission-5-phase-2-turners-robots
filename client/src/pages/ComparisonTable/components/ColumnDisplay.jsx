import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import styles from "./ColumnDisplay.module.css";
import addProductBtn from "../../../assets/add-product-icon.png";
import { useEffect } from "react";
import nextListingIcon from "../../../assets/icons/Next-listing.png";
import prevListingIcon from "../../../assets/icons/previous-listing.png";

function ColumnDisplay({ data, category }) {
  const navigate = useNavigate();
  const location = useLocation();

  // for columns - starts empty before items placed inside
  const [comparisonSlots, setComparisonSlots] = useState([
    null,
    null,
    null,
    null,
  ]);

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

      setComparisonSlots((prevSlots) => {
        const updatedSlots = [...prevSlots];
        updatedSlots[slotIndex] = selectedItem;
        return updatedSlots;
      });
    }
  }, [location.state]);

  // when add product button is clicked - sends to search results page and directly to the category that was chosen in the comparison page.
  function handleGoToSearch(slotIndex) {
    navigate(`/searchresults/?q=${encodeURIComponent(category)}`, {
      state: { slotIndex: slotIndex, category: category },
    });
  }

  // when remove button is clicked - column/item is removed and state is updated
  function handleRemoveItem(slotIndex) {
    const updatedSlots = [...comparisonSlots];
    updatedSlots[slotIndex] = null;
    setComparisonSlots(updatedSlots);
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
      </div>

      <div className={styles.mobileTableWrapper}>
        <div className={styles.comparisonScroll} id="comparisonScroll">
          <div className={styles.comparisonContainer}>
            {/* maps over columns, if empty include the add product button else include item and remove button  */}
            {comparisonSlots.map((slot, index) => (
              <div key={index} className={styles.comparisonCard}>
                {slot ? (
                  <div>
                    <h2>{slot.title}</h2>
                    <img
                      className={styles.productImage}
                      src={slot.image}
                      alt={slot.title}
                    />

                    <p>
                      <strong>Price:</strong> Buy now
                      <br />
                      {slot.price}
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

                    <div className={styles.removeBtnContainer}>
                      <button
                        className={styles.removeBtn}
                        onClick={() => handleRemoveItem(index)}
                      >
                        {" "}
                        X{" "}
                      </button>
                    </div>
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
