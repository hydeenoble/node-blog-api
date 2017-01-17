var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Post} = require('./models/post');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/posts', function (req, res) {
     var post = new Post({
         title: req.body.title,
         body: req.body.body
     });

    post.save().then(function (doc) {
        res.send(doc);
    }, function (e) {
        res.status(400).send(e);
    });
});

app.get('/posts', function (req, res) {
    Post.find().then(function (posts) {
        res.send({posts});
    }, function (e) {
        res.status(400).send(e);
    });
});


app.listen(3000, function () {
    console.log('Started on port 3000')
});

module.exports = {app};
