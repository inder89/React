var express = require("express");

var cors = require('cors');

var app = express();


var Router = express.Router();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();

});

app.get('/',function(req,res){
return res.json({success: true, message: "welcome to the express api"});

});













app.listen(4000,function(){console.log("The app is now running at port 3000")})
