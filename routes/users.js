const express = require('express');
const db = require('../db')
const router = express.Router()
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth_middleware = require('../middlewares/auth_middleware')

router.post('/create', async (req, res) => {
  try {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
      return res.send({
        success: false,
        message: 'Please fill the fields'
      })
    } else {
      const is_email = await db('users').select('email').where({ email: email }).first().then((row) => row)
      if (is_email) {
        return res.send({
          success: false,
          message: 'Email already Exists'
        })  
      } else {
        const hash_password = await bcryptjs.hash(password, 12)
        const result = await db('users').insert({
          name,
          email,
          password: hash_password,
        })
        const user_id = { user_id: result }
        const token = jwt.sign(user_id, "secretOrPrivateKey")
        if (result) {
          return res.send({
            success: true,
            token: token,
            message: 'Registration Successfull'
          })              
        } else {
          return res.send({
            success: false,
            message: 'Some problem occurred'
          })    
        }
      }
    }
  } catch (e) {
    return res.send({
      success: false,
      message: e.message
    })
  }
})

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

router.get('/me', auth_middleware, async(req, res) => {
  try {
    const user_id = req.user_id
    const user = await db('users').select('*').where('id', user_id).first();
    return res.send({
      success: true,
      user,
    })
  } catch (e) {
    return res.send({
      success: false,
      message: e.message
    })
  }
})

module.exports = router