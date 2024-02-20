const express = require('express');
var app = express();

var json = require('json');

app.get('/',function(req,res){
    res.send('Start Server');
});

var fact = (fc)=>{return fc==0? 1 : fc*fact(fc-1)};
var fib = (fb)=>{return fb==0? 0 : fb+fib(fc-1)};
var multi = (ml)=>{
    var arr = {};
    for(var i=1 ; i<=10 ; i++)
    {
        arr[i-1] = ml + " * " + i + " = " + (i*ml);
    }
    return arr;
};

app.get('/fact/:num',function(req,res){
    var result = fact(req.params.num);
    console.log(result);
    res.json('factorial is: '+ result);
});

app.get('/fib/:num',function(req,res){
    var result = fib(req.params.num);
    console.log(result);
    res.json('fibonacci is: '+ result);
});

app.get('/multi/:num',function(req,res){
    var result = multi(req.params.num);
    console.log(result);
    res.json(result);
})

var server = app.listen(7777,function(){
    var host = server.address().address;
    var port = server.address().port;
});