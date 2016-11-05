var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Geli' });

  router.get('/', function(req, res, next) {
  res.render('dosdos', { title: 'dosdos' });

});


module.exports = router;
