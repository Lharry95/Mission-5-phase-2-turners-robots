import React from "react";
import ComparisonColumnData from "./components/ComparisonColumnData";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import ColumnDisplay from "./components/ColumnDisplay";

function ComparisonTable() {
  return (
    <div>
      <Header />
      <ComparisonColumnData />
      <Footer />
    </div>
  );
}

export default ComparisonTable;
