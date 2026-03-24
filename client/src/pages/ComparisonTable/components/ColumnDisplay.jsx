import React from "react";
import { useState } from "react";
import styles from "./ColumnDisplay.module.css";

function ColumnDisplay({ data }) {
  const [selectedItems, setSelectedItems] = useState([]);

  function handleAddToCompare(item) {
    const alreadySelected = selectedItems.find(
      (selectedItem) => selectedItem._id === item._id
    );

    if (!alreadySelected) {
      setSelectedItems([...selectedItems, item]);
    }
  }

  function handleRemoveItem(id) {
    const updatedItems = selectedItems.filter((item) => item._id !== id);
    setSelectedItems(updatedItems);
  }

  return (
    <div className={styles.itemList}>
      {data.map((item) => (
        <div key={item._id} className={styles.itemBox}>
          <button
            className={styles.btn}
            onClick={() => handleAddToCompare(item)}
          >
            Add product
          </button>
        </div>
      ))}

      {selectedItems.length === 0 ? (
        <p>No Items selected yet</p>
      ) : (
        <div className={styles.comparisonWrapper}>
          {selectedItems.map((item) => (
            <div key={item._id} className={styles.comparisonCard}>
              <p>{item.title}</p>
              <img
                src={`http://localhost:3000${item.image}`}
                alt={item.title}
                width="120"
              />
              <p>
                <strong>Buy Now</strong> {item.price}
              </p>
              <p>
                <strong>Condition</strong> {item.condition}
              </p>
              <p>
                <strong>Dimensions</strong> {item.dimensions}
              </p>
              <p>
                <strong>Shipping & pick-up</strong> {item.shipping_and_pickup}
              </p>
              <p>
                <strong>Payment Options</strong> {item.payment_options}
              </p>

              <button
                className={styles.removeBtn}
                onClick={() => handleRemoveItem(item._id)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ColumnDisplay;
