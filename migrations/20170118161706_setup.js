
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('Articles', function(table){
      table.increments('id').primary()
      table.string('body').notNullable()
      table.string('title', 45).notNullable()
      table.string('author',30).defaultTo('Anonymous')
    })
  ])
}

exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTableIfExists('Articles')
    ])
}
