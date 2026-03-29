import "./SearchResults.css"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import icon_eye from "./assets/icon_eye.png"
import icon_binoculars_plus from "./assets/icon_binoculars_plus.png"
import icon_binoculars_minus from "./assets/icon_binoculars_minus.png"
import filter from "./assets/filter.png"
import Header from "../../common/Header"
import Footer from "../../common/Footer"

function SearchResults()
{
  const [listings, setListings] = useState([])
  const [sortBy, setSortBy] = useState("Best Match")
  const [sortDropdown, setSortDropdown] = useState(false)
  const [watchlist, setWatchlist] = useState(true)

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
                <button className="leftIcon">
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