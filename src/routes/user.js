const  express = require('express')
const userController = require('../controllers/user.controller')
const authMiddleware = require('../middlewares/auth');

const router = express.Router()

    
router.get('/', authMiddleware,  userController.fetchUsers);
router.get('/:id', authMiddleware,  userController.fetchUserById);   


//router.get('/test', userController.testController); 

module.exports = router
