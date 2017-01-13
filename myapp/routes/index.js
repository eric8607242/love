var express = require('express');
var path = require("path");
var quertstring = require('querystring');
var mysql = require('mysql');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname,'../views','index.html'));
    //res.render('index', { title: 'Express' });
    console.log('jj123123');

    });
router.get('/abg', function(req, res,next) {
    console.log('success');
    res.sendFile(path.join(__dirname, '../views', 'abg.html'));
    });

router.get('/tr', function(req, res,next) {
    console.log('success');
    res.sendFile(path.join(__dirname, '../views', 'tr.html'));
    });


router.get('/test',function(reg,res,next){
    console.log('success');
    res.sendFile(path.join(__dirname, '../views', 'test.html'));
    });

router.get('/info',function(req,res,next){
    console.log('success');
    res.sendFile(path.join(__dirname, '../views', 'info.html'));
    });

router.get('/abg',function(req,res,next){ 
    console.log('success'); 
    res.sendFile(path.join(__dirname, '../views', 'abg.html'));
    });

router.get('/tr',function(req,res,next){
    console.log('success');
    res.sendFile(path.join(__dirname, '../views', 'tr.html'));
    });

router.get('/result',function(req,res,next){
    console.log('success');
    //res.sendFile(path.join(__dirname, '../views', 'result.html'));
    });



router.post('/userin',function(req,res){
    console.log('userssuccess');
    })

router.post('/saveUser',function(req,res){
    console.log('success111');

    var connection = mysql.createConnection({
host:'localhost',
user: 'wp2016_groupE', 
password: 'lovedivine',
database: 'wp2016_groupE' 
});
    console.log("1111111111");
    var post = {
love : req.body.name,
fbID : req.body.ID
//email : req.body.email
}
var insert = 'INSERT INTO MyGuests SET ?';  
var insert1 = 'insert into MyGusets set ?'; 
console.log(req.body.name);
console.log(req.body.ID);
//console.log(req.body.email);
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
      if(err)
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
