Bio = require('../Model/bioModel.js');
exports.add = function (req, res) {
var bio = new Bio();
bio.FirstName = req.body.FirstName? req.body.FirstName: bio.FirstName;
bio.LastName = req.body.LastName? req.body.LastName: bio.LastName;
bio.Email = req.body.Email;
bio.Phone = req.body.Phone;
bio.Qualification = req.body.Qualification;
bio.PassOut = req.body.PassOut;
bio.Institute = req.body.Institute;
bio.YearofExperience= req.body.YearofExperience;
bio.Technical = req.body.Technical;

//Save and check error
bio.save(function (err) {
    
    if (err)
        res.json(err);
    
    res.json({
        message: "New Bio Added!",
        data: bio
    });
});

};