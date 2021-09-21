let router = require('express').Router();
bioService_Update = require('../bioService/bioService_Update.js');
// Update Bio
exports.update = function (err,bio) {
    bioService_Update.bioService_update(err,bio);
    if (err) return console.error(err); 
};


  