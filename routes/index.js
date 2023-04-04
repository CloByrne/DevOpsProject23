var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    const features = [
        {
            title: 'Great Location',
            icon: 'fas fa-thumbtack fa-3x',
            color: 'grey'
        },
        {
            title: 'Free Meals',
            icon: 'fas fa-utensils fa-3x',
            color: 'grey'
        },
        {
            title: 'Fitness Room',
            icon: 'fas fa-heartbeat fa-3x',
            color: 'grey'
        }
    ];

    res.render('index', {
        title: 'Murray Hotel | Welcome',
        lead: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quia commodi beatae sequi iusto itaque',
        paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rem ipsam optio dolorum fuga ducimus dolores. Earum voluptatem minus, porro sunt ullam quos enim excepturi nemo ab rerum totam non vitae illum sint repellat, tempore beatae perspiciatis cum. Assumenda, nobis.',
        features: features
    });
});


module.exports = router;
