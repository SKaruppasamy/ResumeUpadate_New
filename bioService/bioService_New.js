let router = require('express').Router();
//For creating new bio
Dao_New = require('../bioDao/Dao_New.js');
exports.bioService_add = function (err,bio) {
    
    Dao_New.Dao_add(err,bio);
    if (err) return console.error(err); 
};
