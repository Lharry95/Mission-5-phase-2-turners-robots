# Mission 5 phase 2 - Turners Robots

---
## Installation

Run the following in the terminal within both the 'server' and 'client' folder directories to install all the necessary packages.

```bash
npm install
```
This will install all necessary packages from `package.json`

---

## Usage

To begin using this project, after the previous installation steps are completed, you will need to run both the frontend and the backend.

To do so run the following in the terminal, within both directories as before *(client & server)*:

```bash
npm run dev
```

This runs nodemon through the server.js, and React through the App.jsx.

#### Note
You will also need to add a valid MonogDB local database route which you need to place into your own .env under the variable name `MONGODB_URI='mongodb://localhost:12345/<example>'`

---
## Search Results Page
The 'Search Results' page fetches a list of listings from the MongoDB Database and displays them to the user, depending on the search query provided.

### Usage
To use the search results page and it's associated functions, there needs to be the associated seeded data to pull from. To do this, make sure you have the required.env from the backend and then, run the following in the console:

```bash
cd server/auction-data-cli
node commands/commands.js seedSearch
```
This should seed all required data for use with the search results page.

### Features
- Fetches all listings that meet the search criteria from the database
- Places this information in the form of an array in a grid
  - Displays the following:
    - Title
    - Description
    - Price
    - Image
- Clicking on the top left icon on an image will open the **'Quick View'** feature, displaying more specific information as well as a bidding screen.

### Routes
**Frontend:** `http://localhost:5173/searchresults` *(This will be appended with the search query)*

**Backend:** `GET /api/search`

### Notes
Anything that lacks function such as the filters in the header of the search results area, and the bidding area within the quick view overlay, was decided with the UX team after discussion, and whether that fit the scope of the project. Additionally, the extra details are the same across the different quick overlay previews because that information is not stored within the database for this page, and there is not enough information given to fill these out for each product. 

---

## Product Listing Page

The Product Listing Page displays a product listing from MongoDB using a dynamic listing ID and allows users to place bids, view seller information, browse related listings, and navigate into the comparison flow.

### Features
- Fetches a listing from MongoDB by ID
- Displays product gallery, title, description, seller details, and pricing
- Allows users to place a higher bid
- Validates that bids must be greater than the current bid
- Displays related listings
- Displays seller’s other listings
- Supports navigation to the comparison table
- Uses seeded listings data so the page can be tested locally by the team


---
## Comaprison Table Page
The 'Comparison Table' page fetches a listing from the MongoDB Database and displays them to the user. The item gets chosen from the product listing page and gets sent to the comparison table. 

### Features
- Fetches a listing that meet the search criteria from the database
- Places this information into the comparison table
  - Displays the following:
    - Title
    - Description
    - Price
    - Dimension
    - Condition
    - Shipping & pick ups
    - Payments Options: 

### Routes
**Frontend:** `http://localhost:5173/comparison/table` *(This will be appended with the search query)*

**Backend:** `GET /api/search`

---

### Routes

#### Frontend
- `/productlisting/:id`
- `/comparison/table`

#### Backend
- `GET /api/listings` fetch all listings
- `GET /api/listings/:id` fetch a listing by ID
- `PATCH /api/listings/:id/bid` submit a higher bid for a listing
- `GET /comparison/table` submit a higher bid for a listing

### Example bid request
```json
{
  "bidAmount": 500
}
```

### Example test route
- `http://localhost:5173/productlisting/69c4fb2929691828d2f6f6dd`
- `http://localhost:5173/comparison/table`

### Listings seed command
Run the listings seed so the same product data is available locally:

```bash
cd server/auction-data-cli
node commands/commands.js seedListings
```

Optional reset first:

```bash
node commands/commands.js deleteAllListings
node commands/commands.js seedListings
```

### How to run

#### Server
```bash
cd server
npm install
npm run dev
```

#### Client
```bash
cd client
npm install
npm run dev
```

### Notes
- MongoDB must be running locally
- The product page uses data from the `listings` collection
- A valid MongoDB listing ID is required in the frontend route
- Seeded listings data is included so other team members can test the page locally
- Homepage design cards and product listing data may use different data sources unless fully connected

---

## Contributors

The following GitHub profiles contributed to the project:

- ##### **Lharry95** (Lharyzza Vai'ai)
- ##### **NotYourRootUser** (Justin Uasele)
- ##### **HayleyW-lab** (Hayley Wilson)
- ##### **pa-missionreadyhq** (Paywand Amir)
