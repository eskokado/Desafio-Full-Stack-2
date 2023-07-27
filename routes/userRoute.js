const express = require('express');
const db = require('../db')
const router = express.Router()
const auth_middleware = require('../middlewares/auth_middleware')

const UserController = require('../controllers/UserController')

router.get('/me', auth_middleware, UserController.me)
router.post('/create', UserController.create)

module.exports = router