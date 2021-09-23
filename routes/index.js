var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req)
  var ip = requestIp.getClientIp(req);
  res.render('index', { title: ip });
});

module.exports = router;


http://remoto.dgb.uanl.mx/login?url=http://hporvenirproxy.azurewebsites.net/

