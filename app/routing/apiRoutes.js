var friendData = require("../data/friends.js");

module.exports = function(app) {

app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "friends.js"));
  });
 app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newFriend = req.body;
  
    // Using a RegEx Pattern to remove spaces from newFriend
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newFriend.routeName = newFriend.name.replace(/\s+/g, "");
  
    console.log(newFriend);
  
    characters.push(newFriend);
  
    res.json(newFriend);
  });
}