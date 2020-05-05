// console.log("Hi from NodeJS");

var http = require("http");
var express = require("express");
var app = express();

// var server = http.createServer(function (req, res) {
//   res.write("<html><body><h1>Hello from Webstorm</h1></body></html>");
//   res.end();
//
// });

app.use(express.static(__dirname + "/public"));

var hb = require("express-handlebars");
app.engine("handlebars", hb());
app.set("View engine", "handlebars");

app.get("/", function (req,res) {
  res.render("home", {title: "Hello from Webstorm", message: "Hi there!"});
});

var server = http.createServer(app)

server.listen(3000);
