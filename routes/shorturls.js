const express = require('express');
const {
    getHome,
    createShortUrl,
    createCustomShortUrl
} = require('../controllers/shorturls');

const router = express.Router();

router.route('/')
    .get(getHome);

router.route('/new')
    .post(createShortUrl)

router.route('/custom')
    .post(createCustomShortUrl);

module.exports = router;