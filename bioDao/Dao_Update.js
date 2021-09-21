Bio = require('../bioModel/bioModels.js');
exports.Dao_update = function (req, res) {
    Bio.findById(req.params.bio_id, function (err, bio) {
        if (err)
        res.send(err);
        bio.FirstName = req.body.FirstName ? req.body.FirstName : bio.FirstName;
        bio.LastName = req.body.LastName ? req.body.LastName : bio.LastName;
        bio.Email = req.body.Email;
        bio.Phone = req.body.Phone;
        bio.Qualification = req.body.Qualification;
        bio.PassOut = req.body.PassOut;
        bio.Institute = req.body.Institute;
        bio.YearofExperience = req.body.YearofExperience;
        bio.Technical = req.body.Technical;

        //save and check errors
        bio.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Bio Updated Successfully",
                data: bio
            });
        });
    });
};