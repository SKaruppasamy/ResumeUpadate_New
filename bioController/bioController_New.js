let router = require('express').Router();
//For creating new bio
bioService_New = require('../bioService/bioService_New.js');
exports.add = function (err,bio) {
    
    bioService_New.bioService_add(err,bio);
    if (err) return console.error(err); 
};
