#!/usr/local/bin/node

var mysql = require('mysql');
console.log(mysql);
var connection = mysql.createConnetion({
host: 'localhost',
user: 'wp2016_groupE',
password: 'lovedivine',
database: 'wp2016_groupE'
});

connection.connect();
console.log('Content-type: text/html; charset=utf-8\n');
console.log('<h1>Hello</h1>')
