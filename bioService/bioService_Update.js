let router = require('express').Router();
Dao_Update = require('../bioDao/Dao_Update.js');
// Update Bio
exports.bioService_update = function (err,bio) {
    Dao_Update.Dao_update(err,bio);
    if (err) return console.error(err); 
};


  