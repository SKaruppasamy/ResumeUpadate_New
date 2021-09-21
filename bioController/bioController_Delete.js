let router = require('express').Router();
//Import Bio dao
bioService_Delete = require('../bioService/bioService_Delete.js'); 
exports.Delete = function (err, bio) {
    bioService_Delete.bioService_Delete(err,bio);
    if (err) return console.error(err); 
};

     