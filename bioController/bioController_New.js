//Import Bio Model
Bio = require('../Model/bioModel');
//For creating new bio
//
exports.add = function (req, res) {
New = require('../bioDao/Dao_New.js');

router.route('/bio')
    .post(New.add);
};
//Export API routes
module.exports = router;