const express = require('express')

const getAuthRouter  = require('./auth');
const getUserRouter = require('./user');
const getInvoiceRouter = require('./invoice');
const getClientRouter = require('./client');
    
const router = express.Router();
    
router.use('/auth', getAuthRouter)
router.use('/user', getUserRouter)
router.use('/invoice', getInvoiceRouter)
router.use('/client' , getClientRouter )

module.exports =  router
//}


//export default getRouter
