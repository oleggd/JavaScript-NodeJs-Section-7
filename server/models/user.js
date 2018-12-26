var mongoose = require('mongoose');

var User = mongoose.model('User', {
    name : {
        type : String,
        require : true,
        trim : true,
        minlength : 5
    },
    email : {
        type : String,
        require : true,
        trim : true,
        minlength : 10
    }
});

module.exports = {User};