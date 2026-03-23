import React from "react";
import { useState, useEffect } from "react";
import styles from "./ComparisonColumnData.module.css";

function ComparisonColumnData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/comparisontable")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.columnContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((header, index) => {
              <th key={index}>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((rowItem) => (
            <tr key={rowItem.id}>
              <td>{rowItem.name}</td>
              <td>{rowItem.image}</td>
              <td>{rowItem.price}</td>
              <td>{rowItem.condition}</td>
              <td>{rowItem.dimensions}</td>
              <td>{rowItem.shippingAndPickUp}</td>
              <td>{rowItem.paymentOptions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ComparisonColumnData;
