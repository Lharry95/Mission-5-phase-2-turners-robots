import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./ColumnDisplay.module.css";
import addProductBtn from "../../../assets/add-product-icon.png";

function ColumnDisplay({ data }) {
  const navigate = useNavigate();
  const [comparisonSlots] = useState([null, null, null, null]);

  function handleGoToSearch(slotIndex) {
    navigate("/searchresults", {
      state: { slotIndex: slotIndex },
    });
  }

  return (
    <div className={styles.comparisonContainer}>
      {comparisonSlots.map((slot, index) => (
        <div key={index} className={styles.comparisonCard}>
          {slot === null ? (
            <button
              className={styles.addProductBtn}
              onClick={() => handleGoToSearch(index)}
            >
              {" "}
              {<img src={addProductBtn} alt="add product" />} <br />
              Add Product
            </button>
          ) : (
            <p>Product will show here</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default ColumnDisplay;
