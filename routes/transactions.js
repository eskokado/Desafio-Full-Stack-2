const express = require('express');
const db = require('../db')
const auth_middleware = require('../middlewares/auth_middleware')
const router = express.Router()

router.get('/', auth_middleware, async(req, res) => {
  try {
    const user_id = req.user_id
    const transactions = await db('transactions').select('*').where('user_id', user_id)
    return res.send({
      success: true,
      transactions
    })
  } catch (e) {
    return res.send({
      success: false,
      message: e.message
    })
  }
})

module.exports = router