/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable('transactions', function(table) {
    table.enum('status', ['Em avaliação', 'Aprovado', 'Reprovado']).defaultTo('Em avaliação').notNullable().alter()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('transactions', function(table) {
    table.string('status', 20).notNullable().alter()
  })  
};
