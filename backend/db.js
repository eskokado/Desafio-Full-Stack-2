const knex = require('knex');
const db = knex({
  client: 'mysql',
  connection: {
    host: process.env.HOST,
    port: +process.env.PORT,
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  }
})
module.exports = db;