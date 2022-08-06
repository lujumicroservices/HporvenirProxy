var express = require('express');
const crypto = require('crypto');

const algorithm = 'aes-256-ctr';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
const iv = crypto.randomBytes(16);

var router = express.Router();

/* GET home page. */
router.get('*', function(req, res, next) {
  
  var json = JSON.stringify(req.headers);
  var json2 = JSON.stringify(req.rawHeaders);
  
  let ts = Date.now();
  var ip = req.headers["x-client-ip"];

  const enc1 = encrypt(ip + "@" + ts);
  
  console.log("HBBBBBBBBBBBBB");
  
  console.log("IP: " + ip);
  //res.redirect('http://hemerotecaelporvenir.com.mx/');
  res.redirect('/navigation?secret=' + enc1.content + "&iv=" + enc1.iv);
     
    
  
  res.render('index', { title: ip , json : json, raw : json2, enc : JSON.stringify(enc1) });
});

const encrypt = (text) => {
  
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

  return {
      iv: iv.toString('hex'),
      content: encrypted.toString('hex')
  };
};

const decrypt = (hash) => {

  const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));

  const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

  return decrpyted.toString();
};

module.exports = router;


