import React, { useEffect, useState } from "react";
import styles from "./ComparisonColumnData.module.css";

function ComparisonColumnData() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/comparisontable/compare")
      .then((response) => response.json())
      .then((items) => {
        console.log("Fetched data:", items);
        setData(items);
      })
      .catch((err) => {
        console.log("Frontend fetch error:", err);
        setError("Could not load data");
      });
  }, []);

  return (
    <div className={styles.columnContainer}>
      <h1>Comparison Table: Wooden Desks</h1>

      {error && <p>{error}</p>}

      <table className={styles.comparisonTable}>
        <thead className={styles.tableHead}>
          <tr>
            <th className={styles.titleFont}>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Condition</th>
            <th>Dimensions</th>
            <th>Shipping & Pick Up</th>
            <th>Payment Options</th>
          </tr>
        </thead>

        <tbody>
          {data.map((rowItem) => (
            <tr key={rowItem._id} className={styles.tableRow}>
              <td>{rowItem.title}</td>
              <td>
                <img
                  className={styles.img}
                  src={rowItem.image}
                  alt={rowItem.name}
                />
              </td>
              <td>
                Buy now <br />
                {rowItem.price}
              </td>
              <td>{rowItem.condition}</td>
              <td>{rowItem.dimensions}</td>
              <td>{rowItem.shipping_and_pickup}</td>
              <td>{rowItem.payment_options}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ComparisonColumnData;
