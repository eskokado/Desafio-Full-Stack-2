const jwt = require('jsonwebtoken')
const db = require('../db')

const auth_middleware = async(req, res, next) => {
  const token = req.headers.user_access_token
  if (token) {
    try {
      const { user_id, email, type } = jwt.verify(token, process.env.TOKEN_KEY)
      const existsUser = await db('users').select('*').where('id', user_id).where('email', email).first()
      if (!existsUser) {
        return res.status(404).send({
          message: 'User not found',
        })
      }
      req.user = existsUser
    } catch (e) {
      return res.status(500).send({
        message: e.message,
      })
    }
  } else {
    return res.status(403).send({
      message: 'UnAuthorized'
    })
  }
  next()
}

module.exports = auth_middleware;