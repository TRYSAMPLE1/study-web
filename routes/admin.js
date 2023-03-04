var express = require('express');
const { Admin } = require('mongodb');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index',{admin:true})
});

module.exports = router;
