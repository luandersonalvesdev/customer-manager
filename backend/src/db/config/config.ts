import { Options } from 'sequelize';

const enviroment = process.env.NODE_ENV || 'development';

const config: Options = {
  username: process.env.PG_DB_USER || 'root',
  password: process.env.PG_DB_PASSWORD || 'pass',
  database: process.env.PG_DB_DATABASE || `database_${enviroment}`,
  host: process.env.PG_DB_HOST || 'localhost',
  port: Number(process.env.PG_DB_PORT) || 5432,
  dialect: 'postgres'
};

export = config;