
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('tasks', function (table) {
    table.increments('id').primary(); // adds incrementing int for id
    table.string('description') // adds a string column
        .notNullable() // and is required
    table.string('status') // adds a string column
          .notNullable() // and is required
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
      
  })
  };

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tasks') // drop table when reverting
};
