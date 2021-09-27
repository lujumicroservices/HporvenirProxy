var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  var json = JSON.stringify(req.headers);
  var json2 = JSON.stringify(req.rawHeaders);
  var ip = 1;

  res.redirect('http://hemerotecaelporvenir.com.mx/');

  console.log(req);
  res.render('index', { title: ip , json : json, raw : json2 });
});

module.exports = router;


