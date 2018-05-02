// var friendData = require("../data/friends.js");
const express = require('express');
const router = express.Router();
var path = require("path");



router.get("/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "friends.js"));
  });
 router.post("/survey", function(req, res) {
  console.log(req.body);
  /*
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newFriend = req.body;
  
    // Using a RegEx Pattern to remove spaces from newFriend
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newFriend.routeName = newFriend.name.replace(/\s+/g, "");
  
    console.log(newFriend);
  
    characters.push(newFriend);
  
    res.json(newFriend);
    */
  });


  module.exports = router;