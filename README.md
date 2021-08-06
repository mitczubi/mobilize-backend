# Mobilize Backend Challenge
## Running the API
**Note**: npm (Node Package Manage) can be installed [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
1. Clone this repo to your local machine in your desired file location
2. Install dependencies with npm 
`npm install`
3. Run the project with:
`npm start`
4. You should see an output similar to:
`Server is running. Listening on port 8000`

## Design Dcisions
### Overview
Node.js, Express.js, and MongoDB were chosen due to their lightweight nature and easy set up. I wanted to spend as little time setting this up as possible. I was initially was going to use Flask but decided on Node.js since I had used it for a less robust version of a URL shortener and could reuse some code. 

The project is seperated into folders to more easily integrate other needs that may come in the future. This is to seperate concerns and help with debugging. It will also aid in introducing new business logic that may be introduced. There is definitely some code that could be brought into the middleware or utils folder to help with DRY principles but I will leave it be for now.

### Routes
The bread and butter are in the /api/v1/shorturl routes. 
Posting to /api/v1/shorturl/new with a JSON payload of {"url": "example.com"} will generate a shortened url. This is done by generating a short_id using the stringHasher util that utilizes some third party packages. This generate the same hash if the same URL is provided. These are stored in the db and the shortened URL is returned like so: {"short_url": "localhost:8000/VetQgWQUrR"}. If the hash already exists in the DB the existing record is returned.

Posting to /api/v1/shorturl/custom with a JSON payload of {"url": "example.com", "custom_url": "my-custom-name"} will generate a link like so {"short_url": "localhost:8000/my-custom-name-3"}. If a custom url name is already in use an error is returned saying the name is already in use.

Visiting the return shortened urls will redirect you to the original URL.

Posting to api/v1/stats with a JSON payload like so {"url": "https://localhost:8000/my-custom-name"} queries the DB and returns an JSON object like eg. {"visits": 13, "created_at": "2021-08-06T17:54:27.243Z", "visits_per_day": 13}