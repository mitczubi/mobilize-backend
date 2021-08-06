const express = require('express');
const {
    redirect,
    getApiDocs
} = require('../controllers/shorturls');
const { updateVisitsPerDay } = require('../middleware/updateVisitsPerDay');

const router = express.Router();

router.route('/')
    .get(getApiDocs);

router.route('/:short_id')
    .get(updateVisitsPerDay, redirect);

module.exports = router;