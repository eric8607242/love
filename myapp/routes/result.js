var express = require('express');
var path = require('path');
var mysql = require('mysql');
var querystring=require('querystring');
var router = express.Router();
var utf8 = require('utf8');


router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../view', 'test.html'));
    });

router.post('/check',function(req,res){
    console.log("check");
    var connection = mysql.createConnection({
    host: 'localhost',
    user: 'wp2016_groupE',
    password: 'lovedivine',
    database: 'wp2016_groupE'
    });
    var name = req.body.name1;
    console.log(name);
    
    var post = {
      beloved : req.body.name1
    }
    var select = 'SELECT love FROM MyGuests WHERE beloved = ?'
    var select1 = 'SELECT * FROM MyGuests WHERE beloved = "'+req.body.name1+'"';
    var select2 = 'SELECT love FROM MyGuests WHERE beloved = ?';

    console.log(req.body.name1);
    connection.connect(function(error){ 
    if(!error)
    {
      console.log("ericeric");
      connection.query(select1,function(err,rows){
        if(err)
        {
          console.log("fail");
        }
        else
        {
          console.log("select");
          console.log(rows[0].love);
          res.send(''+rows[0].love+'');
          //console.log('<h1>'+row[0].love+'!!!</h1>');
        }
      })
      //console.log(re);
      /*while ($row = mysql_fetch_array($re, MYSQL_NUM)) {
          //printf("Name: %s", $row[0]);
          console.log("slect")
      }*/
    }
    });
});


module.exports = router;



