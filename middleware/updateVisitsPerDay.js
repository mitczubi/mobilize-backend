const ShortUrl = require('../models/ShortUrl');

exports.updateVisitsPerDay = (req, res, next) => {
    ShortUrl.findOne({short_id: req.params.short_id}, (err, data) => {
        if (err) console.log(err);

        const today = Date.now();
        const created = Date.parse(data.created_at);
        const active_time = Math.abs(today - created);
        const active_time_days = Math.ceil(active_time / (1000 * 60 * 60 * 24));

        // Add one to account for visit about to happen
        const visits_per_day = Math.ceil(data.visits / active_time_days) + 1;

        ShortUrl
            .findOneAndUpdate({short_id: req.params.short_id}, {'visits_per_day': visits_per_day})
            .exec(err => {
                if (err) console.log(err);
            });
    });
    next();
}