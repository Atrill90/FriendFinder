const express = require("express");
const bodyParser = require ("body-parser");
const path = require("path");

let app = express();
let PORT = process.env || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen( PORT, function(){
   console.log("App is listening on PORT " + PORT);
})


