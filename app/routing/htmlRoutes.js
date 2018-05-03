const express = require('express');
const router = express.Router();
var path = require("path");
var newFriend = require("../data/friends")

  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

router.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

  // If no matching route is found default to home
  // router.get("*", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/home.html"));
  // });

  router.post("/survey", function(req, res) {
    console.log(req.body);
    // res.send("success");
   let name = req.body.name;
   let score = parseInt(req.body.scores[0]) + parseInt(req.body.scores[1]) + parseInt(req.body.scores[2]) + parseInt(req.body.scores[3]) + parseInt(req.body.scores[4]) + parseInt(req.body.scores[5]) + parseInt(req.body.scores[6]) + parseInt(req.body.scores[7]) + parseInt(req.body.scores[8]) + parseInt(req.body.scores[9]);

   let totalValues = newFriend.map(element => {
      return element.scores.reduce((totalValue, currentValue)=>{
        return totalValue + currentValue;
      });
    });
    let scoreDiff = totalValues.map(element =>{
      return Math.abs(element - score);
    })

    Array.min = function( array ){
        return Math.min.apply( Math, array );
    };
    
    let minVal = Array.min(scoreDiff);
    
    let lowestIndex = scoreDiff.indexOf(minVal);
    
    // console.log(minVal);
    
    // console.log(`FriendsScore: ${totalValues}`);
    
    
    // console.log(`Userscore: ${score}`);
    
    // console.log(`scoreDifference: ${scoreDiff}`);
    
    console.log(lowestIndex);
    let yourMatch = newFriend[lowestIndex];
    console.log(yourMatch);
    res.send(yourMatch);
    });

  

  module.exports = router;