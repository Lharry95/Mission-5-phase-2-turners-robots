# Mission 5 phase 2 turners robots

## Product Listing Page

The Product Listing Page displays a furniture listing from MongoDB and allows users to place a higher bid.

### Features
- Fetches a listing from MongoDB by ID
- Displays product image, title, and current bid
- Allows users to place a higher bid
- Validates that bids must be greater than the current bid

### Routes

#### Frontend
- `/productlisting`

#### Backend
- `GET /api/listings/:id` fetch a listing by ID
- `PATCH /api/listings/:id/bid` submit a higher bid for a listing

### Example bid request

{
  "bidAmount": 500
}

### How to run

#### Server
- cd server
- npm install
- npm run dev

#### Client
- cd client
- npm install
- npm run dev

### Notes
- MongoDB must be running locally
- The app uses a listing stored in the `turners-listings` database
- A valid MongoDB listing ID is used in the frontend request
