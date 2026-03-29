import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ComparisonTable from "./pages/ComparisonTable/ComparisonTable.jsx";
import ProductListing from "./pages/ProductListing/ProductListing.jsx";
import SearchResults from "./pages/SearchResults/SearchResults.jsx";
import "./App.css";
import ComparisonHomePage from "./pages/ComparisonTable/ComparisonHomePage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comparison" element={<ComparisonHomePage />} />
        <Route path="/comparison/table" element={<ComparisonTable />} />
        <Route path="/productlisting/:id" element={<ProductListing />} />{" "}
        <Route path="/searchresults" element={<SearchResults />} />
      </Routes>
    </>
  );
}

export default App;
