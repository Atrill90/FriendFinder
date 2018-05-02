const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

let app = express();
let PORT = process.env.PORT || 3000;

const htmlRoutes = require('./app/routing/htmlRoutes');
const apiRoutes = require('./app/routing/apiRoutes');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './app/public')));


app.use('/', htmlRoutes);
app.use('/api', apiRoutes);




app.listen(PORT, function(){
   console.log("App is listening on PORT " + PORT);
})


