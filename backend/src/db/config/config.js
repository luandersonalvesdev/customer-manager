require('dotenv').config();
const pg = require('pg');

const enviroment = process.env.NODE_ENV || 'development';

const options = {
  username: process.env.PG_DB_USER || 'root',
  password: process.env.PG_DB_PASSWORD || 'pass',
  database: process.env.PG_DB_DATABASE || `database_${enviroment}`,
  host: process.env.PG_DB_HOST || 'localhost',
  port: process.env.PG_DB_PORT || 5432,
  dialect: 'postgres',
  dialectModule: pg,
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
  production: {
    ...options,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
