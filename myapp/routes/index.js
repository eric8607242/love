var express = require('express');
var router = express.Router();
var path = require("path");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname,'../views','index.html'));
//res.render('index', { title: 'Express' });
    console.log('jj123123');

});

router.get('/test',function(reg,res,next){
  console.log('success');
   res.sendFile(path.join(__dirname, '../views', 'test.html'));
});


module.exports = router;
