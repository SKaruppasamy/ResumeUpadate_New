//Import Bio Model
Bio = require('../Model/bioModel');


exports.view = function (req, res) {
 
  // View Bio
View = require('../bioDao/Dao_View.js');
router.route('/bio/:bio_id')
    .get(View.view)

};
//Export API routes
module.exports = router;