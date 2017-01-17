/**
 * Created by hydee on 1/17/17.
 */
var mongoose = require('mongoose');

var Post = mongoose.model('Post', {
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    body:{
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = {
    Post:Post
}