const express = require('express')
const invoiceController = require('../controllers/invoice.controller')
const authMiddleware = require('../middlewares/auth')

const router = express.Router()

router.post('/', invoiceController.createInvoice );

router.post('/user',authMiddleware,  invoiceController.createInvoice );

module.exports = router
