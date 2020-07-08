const express = require('express')

const getAuthRouter  = require('./auth');
const getUserRouter = require('./user');


    
const router = express.Router();
    
router.use('/auth', getAuthRouter)
router.use('/user', getUserRouter)
    
module.exports =  router
//}


//export default getRouter
