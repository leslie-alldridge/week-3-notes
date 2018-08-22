
exports.up = function(knex, Promise) {
    return knex.schema.table('users', (table) => {
        table.integer('profile_id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.table('users', (table) => {
    table.dropColumn('profile_id')  
  })
}

