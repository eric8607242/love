var express = require('express');
var path = require('path');
//var mysql = require('mysql');
var router = express.Router();

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../view', 'index.html'));
    });
router.get('/info', function(req, res) {
    res.sendFile(path.join(__dirname, '../view', 'info.html'));
    });

<<<<<<< HEAD
router.get('/abg', function(req, res) {
    res.sendFile(path.join(__dirname, '../view', 'abg.html'));
    });

router.get('/tr', function(req, res) {
    res.sendFile(path.join(__dirname, '../view', 'tr.html'));
    });

=======
>>>>>>> eea620213ea3822d9c5b058bfbba9f397290d669


module.exports = router;
/*router.post('/saveData',function(reg,res){
    console.log('success');
*/
