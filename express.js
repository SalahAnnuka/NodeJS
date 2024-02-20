const express = require('express');
var app = express();

//var json = require('json');

app.get('/',function(req,res){
    res.send('Start Server');
});

var fact = (fc)=>{return fc==0? 1 : fc*fact(fc-1)};
var add = (ad)=>{return ad==0? 0 : ad+add(ad-1)};
var multi = (ml)=>{
    var arr = {};
    for(var i=1 ; i<=10 ; i++){
        arr[i-1] = ml + " * " + i + " = " + (i*ml);
    }
    return arr;};

var pal = (pl)=>{
    var pld = true;
    var start = 0, end = pl.length-1;
    while (start<end){
        if (pl[start] != pl[end])
        {
            pld = false;
            break;
        }
        start++;
        end--;
    }
    return pld? 'palindrome' : 'not palindrome';};

app.get('/fact/:num',function(req,res){
    var result = fact(req.params.num);
    console.log(result);
    res.json('factorial for '+req.params.num+' is: '+ result);
});

app.get('/add/:num',function(req,res){
    var result = add(req.params.num);
    console.log(result);
    res.json('Cumulative sum for '+req.params.num+' is: '+ result);
});

app.get('/multi/:num',function(req,res){
    var result = multi(req.params.num);
    console.log(result);
    res.json(result);
})

app.get('/string/:input',function(req,res){
    var result = pal(req.params.input);
    console.log(result);
    res.json(req.params.input+' is: '+result);
})

var server = app.listen(7777,function(){
    var host = server.address().address;
    var port = server.address().port;
});