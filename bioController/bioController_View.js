let router = require('express').Router();
 // View Bio
bioService_View = require('../bioService/bioService_View.js');
exports.view = function (err, bio) {
  bioService_View.bioService_view(err,bio);
 if (err) return console.error(err); 
   
};

