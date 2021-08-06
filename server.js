const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

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

app.listen(port, () => {
    console.log("Server is running. Listening on port %d", port)
})