const express = require('express');
const port = 8003;
const app = express(); 

const db = require('./config/mongoose');
const tasks = require('./models/tasks');


const path =require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());



app.get("/", function(req, res) {
    return res.render('home');
});



app.listen(port,function(err){
    if(err){
        console.log('error',err);
    }
    console.log('server is running on port',port);
});