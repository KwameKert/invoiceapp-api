const express = require('express')
const authMiddleware = require('../middlewares/auth');
const clientController = require('../controllers/client.controller')
const router = express.Router()


router.post('/', authMiddleware , clientController.createClient )


module.exports = router



