import "./SearchResults.css"
import Header from "../../common/Header"
import Footer from "../../common/Footer"


// https://img5.su-cdn.com/cdn-cgi/image/width=750,height=750/mall/file/2023/10/23/9e0f37a7886bdf2ccb4149b515b42a54.jpg

function SearchResults()
{
  return (
  <div className="searchResultsPage">
    <Header/>
    <div className="searchHeader">
      <p className="paths">Home / Marketplace / Home & Living</p>
      <p className="category">Home & Living</p>
    </div>
    
    <div className="filters">
      <div className="labels">Refine</div>
      <div className="labels">Category</div>
      <div className="labels">All Locations</div>
      <div className="labels">New & Used</div>
      <div className="labels">Shipping: All</div>
    </div>
    <div className="searchResultsMain">
      <div className="searchResultsHeader">
        <div className="resultsShown">Showing 516 results for 'wooden desk'</div>
        <div className="sorting">Sort</div>
      </div>
      <div className="results">
        <div className="auctionItem">Item 1</div>
        <div className="auctionItem">Item 2</div>
        <div className="auctionItem">Item 3</div>
        <div className="auctionItem">Item 4</div>
        <div className="auctionItem">Item 5</div>
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default SearchResults;