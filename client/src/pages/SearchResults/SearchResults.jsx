import "./SearchResults.css"
import Header from "../../common/Header"
import Footer from "../../common/Footer"


// https://img5.su-cdn.com/cdn-cgi/image/width=750,height=750/mall/file/2023/10/23/9e0f37a7886bdf2ccb4149b515b42a54.jpg

const auctionItems =
[
  {
    id: 1,
    title: "Wooden Desk",
    description: "A classic, minimalist wooden desk perfect for a home office or hallway. Features a lovely dark wood finish and three handy drawers for stationery. Slim profile makes it great for smaller spaces.",
    price: "$25.00",
    image: "https://img5.su-cdn.com/cdn-cgi/image/width=750,height=750/mall/file/2023/10/23/9e0f37a7886bdf2ccb4149b515b42a54.jpg"
  },

  {
    id: 2,
    title: "Solid Teak Study Desk",
    description: "Proper solid teak desk with plenty of character and storage. Includes seven drawers with stylish curved handles. Perfect for someone who needs a sturdy workspace that can handle a dual-monitor setup.",
    price: "$30.00",
    image: "https://img5.su-cdn.com/cdn-cgi/image/width=750,height=750/mall/file/2023/10/23/9e0f37a7886bdf2ccb4149b515b42a54.jpg"
  },

  {
    id: 3,
    title: "Solid Rimu Desk",
    description: "You can’t beat the warmth of Rimu. This desk is built to last with four deep drawers on the left and a clean open space on the right. Ideal for students or as a dedicated crafting station.",
    price: "$40.00",
    image: "https://img5.su-cdn.com/cdn-cgi/image/width=750,height=750/mall/file/2023/10/23/9e0f37a7886bdf2ccb4149b515b42a54.jpg"
  },

  {
    id: 4,
    title: "Large Desk",
    description: "A substantial desk for those who like to spread out. Massive storage capacity with eight drawers in total. Traditional aesthetic that adds a professional feel to any room.",
    price: "$100",
    image: "https://img5.su-cdn.com/cdn-cgi/image/width=750,height=750/mall/file/2023/10/23/9e0f37a7886bdf2ccb4149b515b42a54.jpg"
  },

  {
    id: 5,
    title: "20th Century Wooden Desk",
    description:"Beautifully aged wooden desk with a balanceddouble-pedestal design. A great piece for fans ofmid-century or 20th-century decor. Solid construction and timeless look.",
    price: "$110",
    image: "https://img5.su-cdn.com/cdn-cgi/image/width=750,height=750/mall/file/2023/10/23/9e0f37a7886bdf2ccb4149b515b42a54.jpg"
  },

  {
    id: 6,
    title: "Corner Desk with Cabinets",
    description: "The ultimate ergonomic setup. This corner unitfeatures built-in side cabinets and a pull-outkeyboard tray to keep your desktop clutter-free. Perfect for gamers or home office pros.",
    price: "$150",
    image: "https://img5.su-cdn.com/cdn-cgi/image/width=750,height=750/mall/file/2023/10/23/9e0f37a7886bdf2ccb4149b515b42a54.jpg"
  },

  {
    id: 7,
    title: "Vintage Wooden Desk",
    description: "A high-quality vintage piece with a unique curved knee-hole design. Features six drawers and a beautifully polished grain. This is a heavy-duty, “forever” desk that looks great in a study or library.",
    price: "$220",
    image: "https://img5.su-cdn.com/cdn-cgi/image/width=750,height=750/mall/file/2023/10/23/9e0f37a7886bdf2ccb4149b515b42a54.jpg"
  },

  {
    id: 8,
    title: "Oak Desk",
    description: "Elegant, contemporary Oak desk with slim legs and three sleek drawers. The light wood grain is stunning and fits perfectly with Scandi or modern minimalist decor. Could also be used as a premium console table in an entryway.",
    price: "$300",
    image: "https://img5.su-cdn.com/cdn-cgi/image/width=750,height=750/mall/file/2023/10/23/9e0f37a7886bdf2ccb4149b515b42a54.jpg"
  }
]

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
      <div className="resultsGrid">
        {auctionItems.map((item) =>
        (
          <div key={item.id} className="itemCard">
            <img src={item.image} alt={item.title} className="itemImage"/>
            <div className="itemInfo">
              <div className="itemTitle">{item.title}</div>
              <div className="itemDescription">{item.description}</div>
              <div className="itemPrice">{item.price}</div>
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