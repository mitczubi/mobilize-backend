const express = require('express');
const {
    getLinkStats,
} = require('../controllers/stats');

const router = express.Router();

/**
 * @swagger
 * /api/v1/stats:
 *   post:
 *     summary: Create a shortened URL for a provided URL
 *     parameters:
 *       - name: url
 *         in: url
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: object
 *                 properties:
 *                   visits:
 *                     type: integer
 *                     description: The total number of visits the URL has received
 *                   created_at: 
 *                     type: date
 *                     description: The creation date of the short url
 *                   visits_per_day:
 *                     type: integer
 *                     description: the average visits per day. (visits/days active)
 */
router.route('/')
    .post(getLinkStats);

module.exports = router;