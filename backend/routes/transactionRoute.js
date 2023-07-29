const express = require('express');
const db = require('../db')
const auth_middleware = require('../middlewares/auth_middleware')
const TransactionController = require('../controllers/TransactionController')
const router = express.Router()

router.get('/', auth_middleware, TransactionController.index)
router.post('/', auth_middleware, TransactionController.create)
router.put('/:id', auth_middleware, TransactionController.update)

module.exports = router

