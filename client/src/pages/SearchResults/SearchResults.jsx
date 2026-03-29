import "./SearchResults.css"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import icon_eye from "./assets/icon_eye.png"
import icon_binoculars_plus from "./assets/icon_binoculars_plus.png"
import icon_binoculars_minus from "./assets/icon_binoculars_minus.png"
import filter from "./assets/filter.png"
import clock from "./assets/clock.png"
import comparison from "./assets/comparison.png"
import Header from "../../common/Header"
import Footer from "../../common/Footer"

function SearchResults()
{
  const [listings, setListings] = useState([])
  const [sortBy, setSortBy] = useState("Best Match")
  const [sortDropdown, setSortDropdown] = useState(false)
  const [watchlist, setWatchlist] = useState(true)
  const [quickview, setQuickview] = useState(false)
  const [currentListing, setCurrentListing] = useState(0)

  const [searchParams] = useSearchParams()
  const query = searchParams.get("q")

  useEffect(() =>
  {
    if (!query)
    {
      return alert("Search query is empty")
    }
    
    fetch(`http://localhost:3000/search?query=${query}`)
      .then((res) => res.json())
      .then((data) => {setListings(data)})
      .catch((err) => console.error(err))
  }, [query])

  const image = import.meta.glob('./assets/*.png', { eager: true, query: '?url'})

  function fetchImagePath(filename)
  {
    const path = `./assets/${filename}`

    return image[path].default
  }

  const watchlistToggle = (id) =>
  {
    setWatchlist(prev =>
    ({
      ...prev, [id]: !prev[id]
    }))
    console.log(`Watchlist status updated for id: ${id}`)
  }

  // Used for debugging in the case where data was not being displayed to the DOM
  // listings.map((listing) => console.log(fetchImagePath(listing.image)))

  return (
  <div className="searchResultsPage">
    {quickview &&
              (
                <div className="quickviewOverlay">
                  <div className="quickviewMain">
                    <button className="navLeft" onClick={() => setCurrentListing(prev => (prev - 1 + listings.length) % listings.length)}>
                      <span>&#8592;</span>
                    </button>

                    <div className="quickviewListing">
                      <div className="quickviewMainContent">
                      <button className="closeQuickview" onClick={() => setQuickview(false)}>X</button>
                      <div className="quickLeft">
                        <img src={fetchImagePath(listings[currentListing].image)} className="quickviewImage"/>
                        <div className="quickDetails">
                          <div className="quickDetailsHeader">Product Details</div>
                          <div className="detailsRow">
                            <div className="quickLabel">Condition</div>
                            <div className="quickValue">As is</div>
                          </div>
                          <div className="detailsRow">
                            <div className="quickLabel">Dimensions</div>
                            <div className="quickValue">W 75cm x H 75cm x D 34cm</div>
                          </div>
                          <div className="detailsRow">
                            <div className="quickLabel">Shipping & pick-up</div>
                            <div className="quickValue">Free - Pick-up only</div>
                          </div>
                          <div className="detailsRow">
                            <div className="quickLabel">Payment Options</div>
                            <div className="quickValue">Cash or NZ Bank Deposit</div>
                          </div>
                        </div>
                      </div>

                      <div className="quickRight">
                        <button className="quickWatchlist" onClick={() => watchlistToggle(listings[currentListing]._id)}>
                          <img src={watchlist[listings[currentListing]._id] ? icon_binoculars_minus : icon_binoculars_plus}/>
                        </button>
                        <p className="quickTitle">Wooden Desk</p>
                        <div className="listingTime">
                          <img src={clock}/>
                          <div className="dateTime">
                            <p>Closes: Fri 13th March 8:22PM</p>
                            <p className="exactTime">4 days, 4 hours, 50 minutes</p>
                          </div>
                        </div>
                          <button className="addComparison">
                            <img src={comparison}/>
                            <p>Add to Comparison Table</p>
                            <p>&#x21FE;</p>
                          </button>
                          <div className="bidArea">
                            <div className="buyArea">
                              <p className="buyNow">Buy Now</p>
                              <div className="buyNowPrice">${listings[currentListing]?.price}</div>
                              <button className="buyButton">Buy Now</button>
                            </div>
                            <div className="placeBid">
                              <p className="startingPriceTitle">Starting price</p>
                              <p className="startingPrice">$2.00</p>
                              <div className="bidInfo">
                                <p className="minBid">Min. starting bid: $2.00</p>
                                <div className="bidFunction">
                                  <input type="number" className="typeBid"></input>
                                  <button className="bidButton">Place bid</button>
                              </div>
                              </div>
                              <p className="generalText">No reserve</p>
                              <p className="generalText">No bids</p>
                            <div className="offer">
                              <p>This seller is open to offers</p>
                              <button className="offerButton">Make an offer</button>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="fullDetails">
                        <button className="fullDetailsButton">View Full Details</button>
                      </div>
                      </div>
                      <button className="navRight" onClick={() => setCurrentListing(prev => (prev + 1) % listings.length)}>
                      <span>&#8594;</span>
                    </button>
                    </div>
                  </div>
              )}
    <Header/>
    <div className="searchHeader">
      <div className="paths">
        <button className="homePath" onClick={() => window.location.href = "http://localhost:5173"}>Home</button>
        <p> / Marketplace / Home & Living</p>
      </div>
      <p className="heading">Home & Living</p>
    </div>

    <div className="filters">
      <div className="labelsRefine">
        <img src={filter}/>
        <span>Refine &#x25BE;</span>
      </div>
      <div className="labels">Category &#x25BE;</div>
      <div className="labels">All Locations &#x25BE;</div>
      <div className="labels">New & Used &#x25BE;</div>
      <div className="labels">Shipping: All &#x25BE;</div>
    </div>
    <div className="searchResultsMain">
      <div className="searchResultsHeader">
        <div className="resultsShown">Showing {listings.length} results for '{query}'</div>
        <div className="sortingArea">
        <button className="sorting" onClick={() => setSortDropdown(!sortDropdown)}>
          <div>Sort: {sortBy}</div>
          <div className="sortArrow">&#x25BE;</div>
        </button>

        {sortDropdown &&
        (
          <ul className="sortDropdown">
            <li onClick={() => {setSortBy("Best Match"); setSortDropdown(false)}}>Best Match</li>
            <li onClick={() => {setSortBy("Lowest Buy Now"); setSortDropdown(false)}}>Lowest Buy Now</li>
          </ul>
        )}
      </div>

      </div>
      <div className="resultsGrid">
        {listings.map((listing) =>
        (
          <div key={listing._id} className="listingCard">
            <div className="imageArea">
              <img src={fetchImagePath(listing.image)} alt={listing.title} className="listingImage"/>
                <button className="leftIcon" onClick={() => {setQuickview(true); setCurrentListing(listings.findIndex(index => index._id === listing._id))}}>
                  <img src={icon_eye}/>
                </button>
                <button className="rightIcon" onClick={() => watchlistToggle(listing._id)}>
                  <img src={watchlist[listing._id] ? icon_binoculars_minus : icon_binoculars_plus}/>
                </button>
            </div>
            <div className="listingInfo">
              <div className="listingTitle">{listing.title}</div>
              <div className="listingDescription">{listing.description}</div>
              <div className="listingPrice">
                <div className="buyNow">Buy now</div>
                <div className="price">${listing.price}</div>
              </div>
            </div>
          </div>
        ))}

        {/* <div className="itemCard">
          <div className="itemImage">Image</div>
          <div className="itemInfo">
            <div className="itemTitle">Title</div>
            <div className="itemDescription">This is a general description of the product. It does what you expect. Good condition. Contact me if you have any concerns. I am giving it away because I no longer have any use for it beyond just taking up space within my house.</div>
            <div className="itemPrice">Price</div>
          </div>
        </div> */}

      </div>
    </div>
    <Footer/>
  </div>
  
  )
}

export default SearchResults;

// {quickview &&
//               (
//                 <div className="quickviewOverlay" onClick={() => setQuickview(false)}>
//                   <div className="quickviewMain">
//                     <button className="navLeft" onClick={() => setCurrentIndex(prev => (prev - 1 + listings.length) % listings.length)}>
//                       <span>&#8592;</span>
//                     </button>

//                     <div>
//                       <img src={fetchImagePath(listings[currentListing].image)} className="quickviewImage"/>
//                     </div>

//                     <button className="navRight" onClick={() => setCurrentIndex(prev => (prev + 1) % listings.length)}>
//                       <span>&#8594;</span>
//                     </button>
//                   </div>
//                 </div>
//               )}