const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const db = require('../db')

module.exports = {
  async index(req, res) {
    try {
      const user_id = req.user_id
      const transactions = await db('transactions').select('*').where('user_id', user_id)
      return res.status(200).send({
        transactions
      })
    } catch (e) {
      return res.status(500).send({
        success: false,
        message: e.message
      })
    }
  }
}