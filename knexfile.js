// Update with your config settings.
require('dotenv').config();
const pg = require('pg');
pg.defaults.ssl = true;
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/dev.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: process.env.DB_URL,
      user:     'qwzwztrllhcziv',
      password: '9c7e79e3c69a46b13140fafc5aa9ddaac58635e695ec96f3619e5139cfc38b15'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations'
    }
  }

};
