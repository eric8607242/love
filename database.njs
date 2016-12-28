#!/usr/local/bin/node

var mysql = require('mysql');

var connection = mysql.createConnection({
host: 'localhost',
user: 'wp2016_groupE',
password: 'lovedivine',
database: 'wp2016_groupE'
});



connection.connect(function(error){
  console.log("gogo");  
  });


connection.query('SELECT * FROM `MyGuests` WHERE 1', function (error, results, fields) {
    console.log('gogo!');
    });


var data = {
      firstname: 'columns',
      lastname: 'integers'
};

connection.query('INSER INTO `MyGuests` SET ?', data, function(error){
    if(error){
    console.log('寫入資料失敗！');
    throw error;
    }
    else
    {
      console.log('success!');
    }
    });
/*connection.query('INSERT INTO `MyGuests`(`firstname`, `lastname`, `email`) VALUES ('eric','eric','eric')', function(error){
  if(error){
  console.log('寫入資料失敗！');
  throw error;
  }
  });
  connection.query('INSERT INTO `MyGuests`(`firstname`, `lastname`, `email`) VALUES ('eric','eric','eric')', function (err) {
  });*/
connection.end();


console.log('Content-type: text/html; charset=utf-8\n');
console.log('<h1>Hello, ' + param.fname + ' ' + param.lname + '</h1>')
// vi:et:ft=javascript
