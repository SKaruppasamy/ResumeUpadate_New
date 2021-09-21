let router = require('express').Router();

//For index
bioService_ViewAll= require('../bioService/bioService_ViewAll.js');
exports.index = function(err,bio)
 {
     bioService_ViewAll.bioService_index(err,bio);
    if (err) return console.error(err); 
};
