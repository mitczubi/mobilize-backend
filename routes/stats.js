const express = require('express');
const {
    getLinkStats,
} = require('../controllers/stats');

const router = express.Router();

router.route('/')
    .post(getLinkStats);

module.exports = router;