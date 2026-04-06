# Mission 5 Phase 2 - Turners Robots (Client)

## Installation
Run the following in the terminal within the `client` folder directory to install all the necessary packages.
```bash
npm install
```

This will install all necessary packages from `package.json`.

## Usage
To begin using the client, after the previous installation steps are completed, run the following in the terminal within the `client` directory:
```bash
npm run dev
```

This runs the React frontend through Vite.

The client will be available at:
http://localhost:5173

## Note
Make sure the backend server is running on port 3000 before starting the client, as the frontend fetches data from the backend API. You will also need a valid MongoDB local database route placed into your `.env` under the variable name `MONGODB_URI='mongodb://localhost:12345/<example>'`

---

## Pages

### Homepage
The Homepage fetches all product listings from the MongoDB database and displays them to the user in a product grid.

#### Features
- Fetches all listings from the backend API
- Displays listings in a 4 column product grid
- Each product card displays:
  - Product image
  - Title
  - Location
  - Condition
  - Buy now price
  - Watchlist icon in the top right corner of each image
- Clicking a product card navigates to the Product Listing page
- Category tabs (Marketplace, Property, Motors, Jobs, Services)
- Filter bar (Shipping, Location, Sort)

#### Routes
- Frontend: `http://localhost:5173/`
- Backend: `GET /api/listings`

#### Seed Command
Run the listings seed so product data is available locally:
```bash
cd server/auction-data-cli
node commands/commands.js seedListings
```

---

### Search Results Page
The Search Results page fetches listings from the MongoDB database and displays them based on the user's search query.

#### Features
- Fetches all listings that meet the search criteria from the database
- Displays results in a grid with title, description, price and image
- Clicking the top left icon on an image opens the Quick View feature

#### Routes
- Frontend: `http://localhost:5173/searchresults`
- Backend: `GET /api/search`

---

### Product Listing Page
The Product Listing page displays a full product listing from MongoDB using a dynamic listing ID.

#### Features
- Fetches a listing from MongoDB by ID
- Displays product gallery, title, description, seller details and pricing
- Allows users to place a higher bid
- Displays related listings and seller's other listings
- Supports navigation to the Comparison Table

#### Routes
- Frontend: `http://localhost:5173/productlisting/:id`
- Backend: `GET /api/listings/:id`

#### Example Test Route
http://localhost:5173/productlisting/69c4fb2929691828d2f6f6dd

---

### Comparison Table Page
The Comparison Table page fetches listings from MongoDB and displays them side by side for comparison.

#### Features
- Fetches listings from the database
- Displays the following for each item:
  - Title
  - Description
  - Price
  - Dimensions
  - Condition
  - Shipping & pickup
  - Payment options

#### Routes
- Frontend: `http://localhost:5173/comparison/table`
- Backend: `GET /comparison/table`

---

## Tech Stack
- React 19
- Vite
- React Router DOM
- JavaScript (ES Modules)

---

## How to Run

### Client
```bash
cd client
npm install
npm run dev
```

### Server (required)
```bash
cd server
npm install
npm run dev
```

---

## Notes
- MongoDB must be running locally before starting either the server or client
- The homepage fetches from the `listings` collection in MongoDB
- A valid MongoDB listing ID is required in the frontend route for the Product Listing page
- Seeded listings data is included so team members can test pages locally

---

## Contributors
The following GitHub profiles contributed to the project:

- [Lharry95](https://github.com/Lharry95) (Lharyzza Vai'ai)
- [NotYourRootUser](https://github.com/NotYourRootUser) (Justin Uasele)
- [HayleyW-lab](https://github.com/HayleyW-lab) (Hayley Wilson)
- [pa-missionreadyhq](https://github.com/pa-missionreadyhq) (Paywand Amir)

Does that look good? Want me to adjust anything? 😊Sonnet 4.6
