var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  return res.status(200).json({ title: 'Welcome to eos' });
});

module.exports = router;
