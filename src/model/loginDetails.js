'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var login = new Schema({
    'userEmail' : {
        type : String
    },
    'userPwd' : {
        type : String
    }
},
{
    collection: 'loginDetails'
}
);

module.exports = mongoose.model('login', login);  