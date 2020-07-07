const express = require('express')

const getAuthRouter  = require('./auth');
//import getUserRoutes from './user';


//function getRouter(){
    
    const router = express.Router();
    router.use('/auth', getAuthRouter)
    //router.use('/users', getUserRoutes())
    
    module.exports =  router
//}


//export default getRouter
