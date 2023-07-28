const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const db = require('../db')

module.exports = {
  async me(req, res) {
    try {
      const user = await db('users').select('*').where('id', req.user.id).first();
      delete user.password
      return res.status(200).send({
        user,
      })
    } catch (e) {
      return res.status(500).send({
        message: e.message
      })
    }
  }, 
  async create (req, res) {
    try {
      const { name, email, password, type } = req.body
      if (!name || !email || !password) {
        return res.status(400).send({
          message: 'Please fill the fields'
        })
      } else {
        const is_email = await db('users').select('email').where({ email: email }).first()
        if (is_email) {
          return res.status(409).send({
            message: 'Email already Exists'
          })  
        } else {
          const hash_password = await bcryptjs.hash(password, 12)
          const result = await db('users').insert({
            name,
            email,
            password: hash_password,
            type: type ?? 'User',
          })
          const user_id = { user_id: result }
          const token = jwt.sign(user_id, process.env.TOKEN_KEY)
          if (result) {
            return res.status(201).send({
              token: token,
              message: 'Registration Successfull'
            })              
          } else {
            return res.status(400).send({
              message: 'Some problem occurred'
            })    
          }
        }
      }
    } catch (e) {
      return res.status(500).send({
        message: e.message
      })
    }
  }
}