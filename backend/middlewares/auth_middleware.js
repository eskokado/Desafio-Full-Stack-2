const jwt = require('jsonwebtoken')

const auth_middleware = async(req, res, next) => {
  const token = req.headers.user_access_token
  if (token) {
    try {
      const { user_id } = jwt.verify(token, "secretOrPrivateKey")
      req.user_id = user_id
    } catch (e) {
      return res.send({
        success: false,
        message: e.message,
      })
    }
  } else {
    return res.send({
      success: false,
      message: 'UnAuthorized'
    })
  }
  next()
}

module.exports = auth_middleware;