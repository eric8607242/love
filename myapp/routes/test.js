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
  loveemail : req.body.email,
  beloved : req.body.name1,
  belovedemail : req.body.email1,
  belovedbir: req.body.bir
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
    console.log("gogo");
    connection.query(insert,post,function(err,res){
        if(error)
        {
        console.log('nonono');
        }
        else
        {
        console.log('insert success');
        }
    });
    }
});

});


  module.exports = router;

