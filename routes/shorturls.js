const express = require('express');
const {
    getHome,
    createShortUrl,
    createCustomShortUrl
} = require('../controllers/shorturls');

const router = express.Router();

/**
 * @swagger
 * /api/v1/shorturl/new:
 *   post:
 *     summary: Create a shortened URL for a provided URL
 *     parameters:
 *       - name: URL
 *         in: URL
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       content:
 *         application/json:
 *           schema:
 *             type: ShortUrl
 *             properties:
 *               data:
 *                 type: object
 *                 properties:
 *                   short_url:
 *                     type: String
 *                     description: The created short URL
 */
router.route('/new')
    .post(createShortUrl)

/**
 * @swagger
 * /api/v1/shorturl/custom:
 *   post:
 *     summary: Create a shortened URL for a provided URL
 *     parameters:
 *       - name: url
 *         in: url
 *         required: true
 *         schema:
 *           type: string
 *       - name: custom_url
 *         in: custom_url
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       content:
 *         application/json:
 *           schema:
 *             type: ShortUrl
 *             properties:
 *               data:
 *                 type: object
 *                 properties:
 *                   short_url:
 *                     type: String
 *                     description: The created short URL
 */
router.route('/custom')
    .post(createCustomShortUrl);

module.exports = router;