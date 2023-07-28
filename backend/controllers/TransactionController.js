const db = require('../db')

module.exports = {
  async index(req, res) {
    try {
      const user_id = req.user_id
      const existsUser = await db('users').select('*').where('id', user_id).first()
      if (!existsUser) {
        return res.status(404).send({
          message: 'User not found',
        })
      }
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
  },
  async create(req, res) {
    try {
      const user_id = req.user_id
      const {cpf, description, point, value, status} = req.body
      if (!cpf || !description || !point || !value) {
        return res.status(400).send({
          message: 'Please fill the fields',
        })
      } else {
        const existsUser = await db('users').select('*').where('id', user_id).first()
        if (!existsUser) {
          return res.status(404).send({
            message: 'User not found',
          })
        }
        const result = await db('transactions').insert({
          cpf, description, point, value, status: status ?? 'Em avaliação', user_id
        })
        const data = await db('transactions').select('*').where('id', result[0]).first()
        if (result) {
          return res.status(201).send({
            data,
          })              
        } else {
          return res.status(400).send({
            message: 'Some problem occurred'
          })    
        }
      }
    } catch (e) {
      return res.status(500).send({
        message: e.message,
      })
    }
  }
}