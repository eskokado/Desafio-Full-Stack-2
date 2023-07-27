/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('transactions', function(table) {
    table.increments('id').primary()
    table.string('cpf', 20).notNullable()
    table.string('description', 255).notNullable()
    table.timestamp('date').defaultTo(knex.fn.now())
    table.bigint('point').notNullable()
    table.decimal('value').notNullable()
    table.string('status', 20).notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

    // relacionamento
    table.integer('user_id')
        .unsigned()
        .references('users.id')
        .notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('transactions');  
};
