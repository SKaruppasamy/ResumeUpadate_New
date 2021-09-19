//Import Bio Model
Bio = require('../Model/bioModel');
// Delete Bio


exports.delete = function (req, res) {
Delete = require('../bioDao/Dao_Delete.js'); 
router.route('/bio/:bio_id')
    .delete(Delete.delete);
};
//Export API routes
module.exports = router;