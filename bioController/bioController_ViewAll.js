//Import Bio Model
Bio = require('../Model/bioModel');

//For index
exports.index = function(req,res){
 ViewAll= require('../bioDao/Dao_ViewAll.js');
 
 router.route('/bio')
    .get(ViewAll.index)
};

//Export API routes
module.exports = router;