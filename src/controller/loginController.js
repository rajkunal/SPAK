const express = require('express');
loginRouter = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

var mongoose = require('mongoose');
const Login = require("../model/loginDetails");

loginRouter.post('/register',function(req,res){
  
  var data = req.body;
  console.log(data)
  
  Login.findOne({userEmail : data.userEmail},function(err,resp){
    if(err)
    {
      res.send({status:'401' , 'data':err});
    }
    else if(resp == null || resp.length == 0){
      bcrypt.hash(data.userPwd, saltRounds).then(function(hash) {
        // Store hash in your password DB.
        data.userPwd = hash;
        var a = new Login(data);
        a.save(function(err,resp){
          if(err){
            res.send({status:'401' , 'data':err});
          }
          else{
            res.send({status:'200' , 'data':resp})
          }
        }) 
      });
       
      }
    
    else{
      res.send({status:'200' , 'data':"User already exists!"})
    }
  })

})

loginRouter.post('/validateUser',function(req,res){

    var email= req.body.email;
    var pwd = req.body.pwd;

    Login.findOne({userEmail : email},function(err,resp){
        if(err){
          res.send({'status':401,data: err})
        }
        else if(resp == null || resp.length == 0){
          res.send({'status':200,data: 'Email not found'})
        }
        else{
          console.log(resp)
          bcrypt.compare(pwd, resp.userPwd).then(function(result) {
            if(result == true){
              res.send({'status':200,data : 'Success'})
            }
            else{
              res.send({'status':200,data : 'Password incorrect'});
            }
          });
        
              // Login.findOne({userEmail : email},function(err,resp2){
              //   if(err){
              //     res.send({'status':401,data : err});
              //   }
              //   else if(resp2 == null || resp.length == 0){
              //     res.send({'status':200,data : 'Password incorrect'});
              //   }
              //   else{
              //     res.send({'status':200,data : 'Success'})
              //   }
              // })
        
         
        }
    })
})



module.exports = loginRouter;
