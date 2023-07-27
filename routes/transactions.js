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


router.post('/', auth_middleware, async (req, res) => {
  try {
    const user_id = req.user_id
    const {cpf, description, point, value, status} = req.body
    if (!cpf || !description || !point || !value || !status) {
      return res.send({
        success: false,
        message: 'Please fill the fields',
      })
    } else {
      const result = await db('transactions').insert({
        cpf, description, point, value, status, user_id
      })
      const data = await db('transactions').select('*').where('id', result[0]).first()
      if (result) {
        return res.send({
          success: true,
          data,
          message: 'Registration Successfull'
        })              
      } else {
        return res.send({
          success: false,
          message: 'Some problem occurred'
        })    
      }
    }
  } catch (e) {
    return res.send({
      success: false,
      message: e.message,
    })
  }
})

module.exports = router