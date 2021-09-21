let router = require('express').Router();
 // View Bio
Dao_View = require('../bioDao/Dao_View.js');
exports.view = function (err, bio) {
  Dao_View.Dao_view(err,bio);
 if (err) return console.error(err); 
   
};

