// var friendData = require("../data/friends.js");
const express = require('express');
const router = express.Router();
var path = require("path");



router.get("/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "friends.js"));
  });
 


  module.exports = router;