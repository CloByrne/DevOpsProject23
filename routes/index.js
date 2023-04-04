var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "DevOps Project 2023", lead: "Welcome to our hotel!" });
});


module.exports = router;
