/*$(document).ready(function(){
  $('button').click(function(){
  console.log('hi');
  saveData();
  });

  function saveData(){
  $.get('database.njs',function(data){
  console.log('eric');
  });
  }
  });*/

var express = require('express');
var path = require('path');
var mysql = require('mysql');
var querystring=require('querystring');
var router = express.Router();

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../view', 'test.html'));
    });

router.post('/saveData',function(reg,res){
    console.log('success');

    var connection = mysql.createConnection({
host: 'localhost',
user: 'wp2016_groupE',
password: 'lovedivine',
database: 'wp2016_groupE'
});

    /*   var data  = {
         'firstname': '1234',
         'lastname': '1234',
         'email':'1234'
         };
     */


    connection.connect(function(error){
      if(error)
      {
      console.log('fail');
      throw error;
      }
      else
      {
      console.log("gogo");
      }
      /*connection.query('create table MyGuests(test char(20))',function(error){
        if(error)
        {
        console.log('gggg');
        }
        else
        {
        console.log('nice');
        }*/
    });
});


module.exports = router;

