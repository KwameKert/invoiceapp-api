const  express = require('express')
const authController = require('../controllers/auth.controller')
const authMiddleware = require('../middlewares/auth');

const router = express.Router()

router.post('/register', authController.register);
router.post('/login', authController.login);   
router.get('/me', authMiddleware , authController.userProfile);

//router.get('/test', authController.testController); 

module.exports = router
