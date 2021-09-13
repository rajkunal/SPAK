const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoDBConnection = require("./src/appConfig/mongoDBconfig") //mongodb connection
const indexRoutes = require('./src/routes/index') // index routes
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


//app.use(cors())
//app.options('*', cors())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS,DELETE");
    res.header("Cache-Control: no-cache")
    next();
});






//Calling mongodb conncection method
mongoDBConnection();

loginDetails = require('./src/model/loginDetails'),


app.use('/api/v1', indexRoutes);



let port = process.env.PORT || 3000


let server = app.listen(port, function () {
});
  
 
server.setTimeout(300000);
  
module.exports = server;