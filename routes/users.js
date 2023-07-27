const express = require('express');
const db = require('../db')
const router = express.Router()
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth_middleware = require('../middlewares/auth_middleware')

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.send({
        success: false,
        message: 'Please fill the fields'
      })
    } else {
      const user = await db('users').select('*').where({ email: email }).first()
      if (user) {
        const is_valid = await bcryptjs.compare(password, user.password)
        if (is_valid) {
          const user_id = { user_id: user.id }
          const token = jwt.sign(user_id, "secretOrPrivateKey")
          return res.send({
            success: true,
            token: token,
            message: 'Account login successfully',
          })  
        } else {
          return res.send({
            success: false,
            message: "Email ou password invalid"
          })  
        }
      } else {
        return res.send({
          success: false,
          message: 'Email ou password invalid'
        })    
      }
    }
  } catch (e) {
    return res.send({
      success: false,
      message: e.message
    })
  }
})

module.exports = router