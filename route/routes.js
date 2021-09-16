let router = require('express').Router();

//set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to Naukris API'
    });
});

//Import Bio Controller
//var bioController = require('../bioController/bioController.js');
var Insert = require('../InsertDao/Insert.js');
var New = require('../NewDao/New.js');
var View = require('../ViewDao/View.js');
var Update = require('../UpdateDao/Update.js');
var Delete = require('../DeleteDao/Delete.js');
// Bio routes
router.route('/bio')
    .get(Insert.index)
    .post(New.add);

router.route('/bio/:bio_id')
    .get(View.view)
    .patch(Update.update)
    .put(Update.update)
    .delete(Delete.delete);

//Export API routes
module.exports = router;