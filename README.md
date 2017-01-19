# Verbiage

## To start the db

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