// Read configuration file
const config = require('../../knexfile.js')

// Configure knex with the correct environment configuration
const env = process.env.NODE_ENV || 'development'
const db = require('knex')(config[env])


// Export the db object, which will be able to make database connections
module.exports = db

// Function for your testing suite
db.deleteEverything = function () {
  if (env !== 'test') return Promise.reject()
  // TODO: Delete data from all tables (useful for testing)
  return Promise.all([
    db.raw('TRUNCATE TABLE "Articles" CASCADE'),
  ])
}