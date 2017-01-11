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
var select2 = 'SELECT * FROM MyGuests WHERE beloved = ?';
var love1;
var love2;
var love1ma1;
var love1ma2;
var love2ma1;
var love2ma2;
var love1age1;
var love1age2;
var love2age1;
var love2age2;
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
      if(rows == null)
      {
        res.send("沒有人和你相愛!!")
      }
      else
      {
        love1 = rows[0].love;
        love1ma1 = rows[0].ma;
        love1age1 = rows[0].age;
        love1ma2 = rows[0].ma1;
        love1age2 = rows[0].age1;
        console.log(rows[0].love);
        console.log("888");
        console.log(love1);
        //res.send(''+rows[0].love+'正偷偷的喜歡你喔'); 
        var select3 = 'SELECT * FROM MyGuests WHERE beloved = "'+love1+'"';
        connection.query(select3,function(err,rows){
          if(err)
          {
          console("fail");
          }
          else
          {
          console.log("select1");
          if(rows == null)
          {
            res.send("沒有人和你相愛")
          }
          else
          {
          love2 = rows[0].love;
          console.log(love2)
          love2ma1 = rows[0].ma;
          love2age1 = rows[0].age;
          love2ma2 = rows[0].ma1;
          love2age2 = rows[0].age1;
          
          if(love2 == req.body.name1 && love1ma1 == love2ma2 && love1age1 == love2age2 && love1ma2 == love2ma1 && love1age2 == love2age1)
          {
          console.log(rows[0].love);
          res.send(''+rows[0].love+'和'+love1+'相愛一波');
          }
          else
          {
            console.log("223213231");
            res.send("沒有人和你相愛!!");
          }
          }
          }
        })
      }
    }
  })
  /*
     console.log("999");
     console.log(love1);
     var select3 = 'SELECT * FROM MyGuests WHERE beloved = "'+love1+'"';

     connection.query(select3,function(err,rows){
     console.log("999");
     console.log(love1);
     var select3 = 'SELECT * FROM MyGuests WHERE beloved = "'+love1+'"';

     if(err)
     {
     console.log("fail1");
     }
     else
     {
     console.log("select1");

  //love2 = rows[0].love;
  console.log(rows[0])
  if(love2 == req.body.name1)
  {
  console.log(rows[0].love);
  res.send(''+rows[0].love+'相愛一波');
  }
  else
  {
  console.log("223213231")
  }

  }
  })*/

  }
});

});


module.exports = router;



