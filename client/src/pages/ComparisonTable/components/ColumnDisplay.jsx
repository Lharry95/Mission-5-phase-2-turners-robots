import React from "react";
import ComparisonColumnData from "./comparisonColumnData";

function ColumnDisplay() {
  const columns = [
    "Name",
    "Image",
    "Price",
    "Condition",
    "Dimensions",
    "Shipping & pick-up",
    "Payment Options",
  ];
  return (
    <div>
      <table>
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

export default ColumnDisplay;
