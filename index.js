var express = require("express");
var http = require("http");

var server = http.createServer();

var app = express(server);

app.use("/", express.static("web"));
app.use("/scripts", express.static("dist"));

app.listen(5000, function () {
    console.log("App listening on *:5000");
});