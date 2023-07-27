const knex = require('knex');
const db = knex({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'db_next_tests'
  }
})
module.exports = db;