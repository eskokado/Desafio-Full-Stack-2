const express = require('express');
const db = require('../db')
const router = express.Router()
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

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

module.exports = router