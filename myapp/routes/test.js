var express = require('express');
var path = require('path');
var mysql = require('mysql');
var querystring=require('querystring');
var router = express.Router();
var utf8 = require('utf8');


router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../view', 'test.html'));
    });

router.post('/saveData',function(req,res){
    console.log('success');
/*    req.on('data', function(data) {
        name += data.name;
        console.log(data.name);
        console.log("fffff");
        name1 += data.name1;
        });
*/
  
    var connection = mysql.createConnection({
host: 'localhost',
user: 'wp2016_groupE',
password: 'lovedivine',
database: 'wp2016_groupE'
});
    console.log(req.body.name);

var post = {
  fbID : req.body.fbID,
  love : req.body.love,
  ma : req.body.ma,
  age : req.body.age,
  beloved : req.body.name1,
  ma1 : req.body.ma1,
  age1 : req.body.age1
}
var insert1 = 'insert into MyGusets set ?';
var insert = 'INSERT INTO MyGuests SET ?';
var insertSQL = 'insert into MyGuests(firstname) values(+req.body.name+)';
var selectSQL = 'select * from MyGuests where eric';

connection.connect(function(error){
    if(error)
    {
    console.log('fail');
    throw error;
    }
    else
    {
    if(req.body.fbID == null || req.body.fbID == '')
    {
      res.send("請登入FB");
    }
    else if(req.body.name1 == null || req.body.name1 == '')
    {
      res.send("每一項資料都要填寫喔");
    }
    else
    {
    console.log("gogo");
    connection.query(insert,post,function(err){
        if(err)
        {
        console.log('nonono');
        }
        else
        {
        console.log('insert success');
        res.send("已經收到你的資訊囉~等等月老的幫忙吧")
        }
    });
    }
    }
});
  
});


  module.exports = router;

