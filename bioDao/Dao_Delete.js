Bio = require('../Model/bioModel.js');
exports.delete = function (req, res) {
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