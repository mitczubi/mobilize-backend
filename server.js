const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require ('swagger-ui-express');

dotenv.config();

const port = process.env.PORT || 8000;

// Route Files
const shorturls = require('./routes/shorturls');
const redirects = require('./routes/redirects');
const stats = require('./routes/stats');

app = express();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

// Mount middleware
app.use(express.json());

// Mount router
app.use('/', redirects);
app.use('/api/v1/shorturl', shorturls);
app.use('/api/v1/stats', stats);

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Mobilize URL Shortener",
            version: "0.1.0",
            description: "A simple URL Shortener API with Node.js, Express.js, and MongoDB",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Mitchell Zubich",
                email: "mitchellzubich@gmail.com"
            },
        },
        servers: [
            {
                url: "https://mobilize-shortener.herokuapp.com"
            },
        ],
    },
    apis: ["./routes/*.js"]
};

const specs = swaggerJsdoc(options);
app.use(
    "/api/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
)

app.listen(port, () => {
    console.log("Server is running. Listening on port %d", port)
})