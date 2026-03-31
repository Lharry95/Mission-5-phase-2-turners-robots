import styles from "./RemoveItemButton.module.css";

function RemoveItemButton({ slotIndex, comparisonSlots, setComparisonSlots }) {
  // when remove button is clicked - column/item is removed and state is updated
  function handleRemoveItem(slotIndex) {
    const updatedSlots = [...comparisonSlots];
    updatedSlots[slotIndex] = null;
    setComparisonSlots(updatedSlots);
  }

  return (
    <div>
      <div className={styles.removeBtnContainer}>
        <button
          className={styles.removeBtn}
          onClick={() => handleRemoveItem(slotIndex)}
        >
          {" "}
          X{" "}
        </button>
      </div>
    </div>
  );
}

export default RemoveItemButton;
