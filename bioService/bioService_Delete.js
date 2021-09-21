let router = require('express').Router();
//Import Bio dao
Dao_Delete = require('../bioDao/Dao_Delete.js'); 
exports.bioService_Delete = function (err, bio) {
    Dao_Delete.Dao_Delete(err,bio);
    if (err) return console.error(err); 
};

     