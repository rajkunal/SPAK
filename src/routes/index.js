const express = require('express');
indexRouter = express.Router();


//indexRouter.use("/login",require('./loginRoutes'));

indexRouter.use("/login",require('../controller/loginController'));


indexRouter.use("/task",require('../controller/taskController'));



module.exports = indexRouter;
