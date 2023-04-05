const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('contact', { 
    title: 'Contact Us',
    lead: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quia commodi beatae sequi iusto itaque',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rem ipsam optio dolorum fuga ducimus dolores. Earum voluptatem minus, porro sunt ullam quos enim excepturi nemo ab rerum totam non vitae illum sint repellat, tempore beatae perspiciatis cum. Assumenda, nobis.',
    footer: 'Hotel BT; 2023, All Rights Reserved'
  });
});

module.exports = router;

