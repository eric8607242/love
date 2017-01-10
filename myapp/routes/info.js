var express = require('express');
var path = require('path');
//var mysql = require('mysql');
var router = express.Router();

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../view', 'info.html'));
    });



module.exports = router;
/*router.post('/saveData',function(reg,res){
    console.log('success');
*/
