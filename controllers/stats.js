const ShortUrl = require('../models/ShortUrl');

exports.getLinkStats = (req, res) => {
    var url = new URL(req.protocol + '://' + req.body.url);
    var short_id = url.pathname.substring(1);
    ShortUrl
        .findOne({short_id: short_id})
        .select('created_at visits visits_per_day')
        .exec((err, data) => {
            if (err) return console.error(err);
            res.json({
                visits: data.visits,
                created_at: data.created_at,
                visits_per_day: data.visits_per_day
            })
        })
}