const mongoose = require('mongoose');
var DateOnly = require('mongoose-dateonly')(mongoose)


mongoose.connect('mongodb://localhost/task_list_db');



const db = mongoose.connection;


db.on('error',console.error.bind(console,'error connecting to db'));


db.once('open',function(){
    console.log('successfully connected');

});