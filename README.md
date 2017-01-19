# Verbiage

## Tech Stack
Front End: React < React Router and React Bootstrap >
Server: Node, Express, Knex,
Build Tool: Webpack
Database: Postgres

## To start the db

run postgres
``
postgres -D /usr/local/var/postgres
``
with postgres installed we can start by first creating the databases we want

`` 
createdb Verbiage_Dev
createdb Verbiage_Test
``

now we must migrate the db

``
knex migrate:latest --env development
knex migrate:latest --env test
``

## Testing

to run test simply use 

``
yarn test
``

## Running Server
to run server start with the ``yarn`` command
then 
``
yarn start
``