const express = require('express');
const {
    redirect
} = require('../controllers/shorturls');
const { updateVisitsPerDay } = require('../middleware/updateVisitsPerDay');

const router = express.Router();

router.route('/:short_id')
    .get(updateVisitsPerDay, redirect);

module.exports = router;