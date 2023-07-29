const express = require('express');
const db = require('../db')
const auth_middleware = require('../middlewares/auth_middleware')
const TransactionController = require('../controllers/TransactionController')
const router = express.Router()

router.get('/', auth_middleware, TransactionController.index)
router.get('/cart', auth_middleware, TransactionController.cart)
router.post('/', auth_middleware, TransactionController.create)
router.put('/:id', auth_middleware, TransactionController.update)
router.delete('/:id', auth_middleware, TransactionController.delete)

module.exports = router

