Bio = require('../Model/bioModel.js');
exports.index = function(req,res){
Bio.get(function (err, bio) {
    if (err)
        res.json({
            status: "error",
            message: err
        });
    res.json({
        status: "success",
        message: "Got Bio Successfully!",
        data: bio       
    });
});

};