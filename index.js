const express = require('express');
const port = 8003;
const app = express(); 

const db = require('./config/mongoose');
const tasks = require('./models/tasks');


const path =require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());

var complete = ["Finish jquery","learn Api"];

app.get("/", function(req, res) {
    tasks.find({},function(err,tasks){
        if(err){
            console.log('Error in fetching contacts from db ');
            return;
        }
        return res.render('home',{ 
            task_list : tasks,
            complete:complete
        });
    });
});
var complete = ["Finish jquery","learn Api"];

app.post('/addtask', function (req, res) {
    tasks.create({
        newtask:req.body.newtask,
        tasktype:req.body.tasktype,
        date:req.body.date
    },function(err,newTask){
        if(err){
            console.log('error in creating todo');
            return;
        }
        console.log('hello',newTask);
        return res.redirect('back');
    });
});

app.post("/removetask", function(req, res) {
    var completeTask = req.body.check;
    console.log(completeTask);
    if (typeof completeTask === "string") {
        complete.push(completeTask);
    } 
   
    var id  =req.query.id; 
    tasks.findByIdAndDelete(id,function(err){
        if (err){
            console.log('error in deleting an object from database');
            return;
        }
        return res.redirect('back');
    });
});



app.listen(port,function(err){
    if(err){
        console.log('error',err);
    }
    console.log('server is running on port',port);
});