const  express = require('express')

//import AuthMiddleware from '../middlewares/auth'
//import * as authController from '../controllers/auth.controller'
const authController = require('../controllers/auth.controller')

//function getAuthRoutes(){
    
    const router = express.Router()

    router.post('/register', authController.register);
    router.get('/test', authController.testController); 
  //  return router
//}

module.exports = router
