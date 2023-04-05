var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index', {
        title: 'Murray Hotel | Welcome',
        lead: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quia commodi beatae sequi iusto itaque',
        paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rem ipsam optio dolorum fuga ducimus dolores. Earum voluptatem minus, porro sunt ullam quos enim excepturi nemo ab rerum totam non vitae illum sint repellat, tempore beatae perspiciatis cum. Assumenda, nobis.'
    });
});

var server = app.listen(3000, function() {
    console.log('listening on port 3000');
});