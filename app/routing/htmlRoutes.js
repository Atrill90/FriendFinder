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
  router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  router.post("/survey", function(req, res) {
    console.log(req.body);
    // res.send("success");
   let name = req.body.name;
   let score = parseInt(req.body.q1) + parseInt(req.body.q2) + parseInt(req.body.q3) + parseInt(req.body.q4) + parseInt(req.body.q5) + parseInt(req.body.q6) + parseInt(req.body.q7) + parseInt(req.body.q8) + parseInt(req.body.q9) + parseInt(req.body.q10);

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
    
    });

  

  module.exports = router;