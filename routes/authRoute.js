const express = require('express');
const db = require('../db')
const router = express.Router()
const auth_middleware = require('../middlewares/auth_middleware')

const AuthController = require('../controllers/AuthController')

router.post('/login', AuthController.login)

module.exports = router