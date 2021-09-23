var express = require('express');
const {parse, stringify, toJSON, fromJSON} = require('flatted');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  var json = stringify(req);
  var ip = 1;
  console.log(json);
  res.render('index', { title: ip , json : json });
});

module.exports = router;


