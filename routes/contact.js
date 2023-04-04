const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});

module.exports = router;
