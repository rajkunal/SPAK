'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskDetails = new Schema({
    'user' : {
        type : String
    },
    'taskList' : [{
        'completed' : {
            type : Boolean
        },
        'task' : {
            type : String
        },
        'date_created' : {
            type: Date
        },

    }]
    
},
{
    collection: 'taskDetails'
}
);

module.exports = mongoose.model('taskDetails', taskDetails);  