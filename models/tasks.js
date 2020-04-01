const mongoose = require('mongoose');
var DateOnly = require('mongoose-dateonly')(mongoose)


const taskSchema = new mongoose.Schema({
    newtask:{
        type:String,
        required:true
    },
    tasktype:{
        type:String,
        required:true
    },
    date:{
        type:DateOnly,
       }
    
});



const task = mongoose.model('TODO',taskSchema);


module.exports = task;