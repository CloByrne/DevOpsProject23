const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('about', { 
    title: 'About',
    hotelInfo: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima rerum neque ipsam qui aliquam consequuntur eveniet mollitia suscipit laborum similique ab vero a excepturi eaque exercitationem magni dolores, in animi?',
    hotelDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rem ipsam optioLorem ipsum dolor sit amet consectetur, adipisicing elit. Officia molestias dolor quidem error eius expedita modi, corporis nisi fuga eos!',
    testimonialOne:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum fugiat deserunt animi numquam! Deserunt, quas voluptate saepe sequi velit deleniti perspiciatis reprehenderit, amet ipsam totam est aliquam laudantium doloribus placeat culpa aliquid autem, maiores laboriosam at et numquam doloremque mollitia!',
    testimonialTwo:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum fugiat deserunt animi numquam! Deserunt, quas voluptate saepe sequi velit deleniti perspiciatis reprehenderit, amet ipsam totam est aliquam laudantium doloribus placeat culpa aliquid autem, maiores laboriosam at et numquam doloremque mollitia!',    
    footer: 'Hotel BT; 2023, All Rights Reserved'
  });
});

module.exports = router;


router.get('/', function(req, res, next) {
  res.render('contact', { 
    
  });
});