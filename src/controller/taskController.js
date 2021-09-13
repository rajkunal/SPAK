const express = require('express');
taskRouter = express.Router();

var mongoose = require('mongoose');
const Task = require("../model/taskDetails");


taskRouter.post('/save',function(req,res){ 

    Task.find({'user':req.body.user},function(err,resp){
        console.log(resp)
        if(err){
            res.send({status:'401' , 'data':err});
        }
       
        else if(resp == null || resp.length == 0){
            console.log(req.body)
            let d = new Task(req.body);
            d.save(function(err,resp1){
                if(err){
                    res.send({status:'401' , 'data':err});
                }
                else{
                    res.send({status:'200' , 'data':resp1});
                }
            })
        }
        else{
            console.log('2')
            Task.updateOne({'user':req.body.user},{'$set': {'taskList' : req.body.taskList}},function(err,resp3){
                if(err){
                    res.send({status:'401' , 'data':err});
                }
                else{
                    res.send({status:'200' , 'data':resp3});
                }
            })
        }
        })


})


taskRouter.post('/userTasks',function(req,res){ 
    let user = req.body.user;
    Task.find({'user':user},function(err,resp){
        res.send({status:'200' , 'data':resp})
    })

})


module.exports = taskRouter;