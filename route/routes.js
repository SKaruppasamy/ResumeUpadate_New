let router = require('express').Router();

//set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to Naukris API'
    });
});

//Import Bio Controller
//var bioController = require('../bioController/bioController_View.js');
var bioController_ViewAll = require('../bioController/bioController_ViewAll.js');
var bioController_New = require('../bioController/bioController_New.js');
var bioController_View = require('../bioController/bioController_View.js');
var bioController_Update = require('../bioController/bioController_Update.js');
var bioController_Delete = require('../bioController/bioController_Delete.js');
// Bio routes
router.route('/bio')
    .get(bioController_ViewAll.index)
    .post(bioController_New.add);

router.route('/bio/:bio_id')
    .get(bioController_View.view)
    .patch(bioController_Update.update)
    .put(bioController_Update.update)
    .delete(bioController_Delete.Delete);

//Export API routes
module.exports = router;