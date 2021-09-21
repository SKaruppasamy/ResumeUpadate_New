Bio = require('../bioModel/bioModels.js');
exports.Dao_Delete = function (req, res) {
    Bio.deleteOne({
        _id: req.params.bio_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Bio Deleted'
        });
    });
};  