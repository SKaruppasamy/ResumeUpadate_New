let router = require('express').Router();

//For index
Dao_ViewAll= require('../bioDao/Dao_ViewAll.js');
exports.bioService_index = function(err,bio)
 {
     Dao_ViewAll.Dao_index(err,bio);
    if (err) return console.error(err); 
};
