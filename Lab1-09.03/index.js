var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.render("index")
});
app.get("/add/:num1/:num2", function(req,res){
    var number1 = parseFloat(req.params.num1)
    var number2 = parseFloat(req.params.num2)
    var sum = number1 + number2
    res.render("add", {number:sum})
});
app.get("/sub/:num1/:num2", function(req,res){
    var number1 = parseFloat(req.params.num1)
    var number2 = parseFloat(req.params.num2)
    var sum = number1 - number2
    res.render("sub", {number:sum})
});
app.get("/mult/:num1/:num2", function(req,res){
    var number1 = parseFloat(req.params.num1)
    var number2 = parseFloat(req.params.num2)
    var sum = number1 * number2
    res.render("mult", {number:sum})
});
app.get("/div/:num1/:num2", function(req,res){
    var number1 = parseFloat(req.params.num1)
    var number2 = parseFloat(req.params.num2)
    var sum = number1 + number2
    res.render("div", {number:sum})
});
app.listen(3000);
