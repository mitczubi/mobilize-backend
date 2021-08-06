const express = require('express');
const {
    getHome,
    createShortUrl,
} = require('../controllers/shorturls');

const router = express.Router();

router.route('/')
    .get(getHome);

router.route('/new')
    .post(createShortUrl)

module.exports = router;