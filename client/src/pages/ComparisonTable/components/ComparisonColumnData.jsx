import React, { useEffect, useState } from "react";
import styles from "./ComparisonColumnData.module.css";
import ColumnDisplay from "./ColumnDisplay";

function ComparisonColumnData() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/comparison/table")
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
      <ColumnDisplay data={data} category="Wooden Desks" />
    </div>
  );
}

export default ComparisonColumnData;
