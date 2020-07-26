const express = require('express')

const getAuthRouter  = require('./auth');
const getUserRouter = require('./user');
const getInvoiceRouter = require('./invoice');

    
const router = express.Router();
    
router.use('/auth', getAuthRouter)
router.use('/user', getUserRouter)
router.use('/invoice', getInvoiceRouter)
    
module.exports =  router
//}


//export default getRouter
