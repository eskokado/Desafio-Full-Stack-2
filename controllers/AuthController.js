const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const db = require('../db')

module.exports = {
  async login (req, res) {
    try {
      const { email, password } = req.body
      if (!email || !password) {
        return res.status(400).send({
          message: 'Please fill the fields'
        })
      } else {
        const user = await db('users').select('*').where({ email: email }).first()
        if (user) {
          const is_valid = await bcryptjs.compare(password, user.password)
          if (is_valid) {
            const user_id = { user_id: user.id }
            const token = jwt.sign(user_id, "secretOrPrivateKey")
            return res.status(200).send({
              success: true,
              token: token,
              message: 'Account login successfully',
            })  
          } else {
            return res.status(404).send({
              message: "Email ou password invalid"
            })  
          }
        } else {
          return res.status(404).send({
            message: 'Email ou password invalid'
          })    
        }
      }
    } catch (e) {
      return res.status(500).send({
        message: e.message
      })
    }
  }
}