const mongoose = require('mongoose');

const ShortUrlSchema = new mongoose.Schema({
    original_url: {
        type: String,
        required: true
    },
    short_id: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    visits: {
        type: Number,
        default: 0
    },
    visits_per_day: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('ShortUrl', ShortUrlSchema);