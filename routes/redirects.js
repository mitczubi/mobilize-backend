const express = require('express');
const {
    redirect
} = require('../controllers/shorturls');

const router = express.Router();

router.route('/:short_id')
    .get(redirect)

module.exports = router;