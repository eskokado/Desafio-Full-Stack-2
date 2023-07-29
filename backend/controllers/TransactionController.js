const db = require('../db')

module.exports = {
  async index(req, res) {
    try {
      const dateFrom = req.query.dateFrom
      const dateTo = req.query.dateTo
      const valueFrom = req.query.valueFrom
      const valueTo = req.query.valueTo
      const status = req.query.status 
      const cpf = req.query.cpf
      const description = req.query.description
      const transactions = await db('transactions').select('*').where((builder) => {
        if ((dateFrom) && (dateTo) && (dateTo >= dateFrom)) 
          builder.whereBetween('date', [dateFrom, dateTo])           
        if (status) builder.where('status', status)
        if (req.user.type === 'User') {
          builder.where('user_id', req.user.id)  
        } else {
          if (cpf) builder.where('cpf', cpf)
          if (description) builder.whereRaw('LOWER(description) LIKE LOWER(?)', [`%${description}%`])
          if ((valueFrom) && (valueTo) && (valueTo >= valueFrom))  builder.whereBetween('value', [valueFrom, valueTo])
        }        
      })
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
      const user_id = req.user.id
      const {cpf, description, point, value, status} = req.body
      if (!cpf || !description || !point || !value) {
        return res.status(400).send({
          message: 'Please fill the fields',
        })
      } else {
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
  },
  async update(req, res) {
    try {
      const {cpf, description, point, value, status} = req.body
      if (!cpf || !description || !point || !value) {
        return res.status(400).send({
          message: 'Please fill the fields',
        })
      } else {
        const user_id = req.user.id
        const id = req.params.id
        const transaction = await db('transactions').select('*').where('id', id).where('user_id', user_id)
        if (!transaction) {
          return res.status(404).send({
            message: 'Not found transaction',
          })
        }  
        const result = await db('transactions').update({
          cpf, description, point, value, status
        }).where('id', id)
        const data = await db('transactions').select('*').where('id', id).first()
        if (result) {
          return res.status(200).send({
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