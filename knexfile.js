module.exports = {

 development: {
   client: 'pg',
   connection: {
     database: 'Verbiage_Dev'
   },
   migrations: {
     tableName: 'knex_migrations'
   }
 },

 test: {
   client: 'pg',
   connection: {
     database: 'Verbiage_Test'
   },
   migrations: {
     tableName: 'knex_migrations'
   }
 },

 production: {
   client: 'pg',
   connection: process.env.DATABASE_URL,
   migrations: {
     tableName: 'knex_migrations'
   }
 },
}