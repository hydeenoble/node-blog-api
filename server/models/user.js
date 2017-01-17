/**
 * Created by hydee on 1/17/17.
 */
var mongoose = require('mongoose');

var User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim : true
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim:true
    }
});

module.exports = {User};