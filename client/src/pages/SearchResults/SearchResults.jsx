import "./SearchResults.css"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import icon_eye from "./assets/icon_eye.png"
import icon_binoculars from "./assets/icon_binoculars.png"
import Header from "../../common/Header"
import Footer from "../../common/Footer"

function SearchResults()
{
  const [listings, setListings] = useState([])
  const [sortBy, setSortBy] = useState("Best Match")

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

  listings.map((listing) => console.log(fetchImagePath(listing.image)))

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
        <div className="resultsShown">Showing {listings.length} results for '{query}'</div>
        <div className="sorting">Sort: {sortBy}</div>
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
                <button className="rightIcon">
                  <img src={icon_binoculars}/>
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