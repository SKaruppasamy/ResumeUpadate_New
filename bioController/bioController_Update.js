//Import Bio Model
Bio = require('../Model/bioModel');
// Update Bio
exports.update = function (req, res) {
Update = require('../bioDao/Dao_Update.js');

router.route('/bio/:bio_id')
    .patch(Update.update)
    .put(Update.update)
};
//Export API routes
module.exports = router;