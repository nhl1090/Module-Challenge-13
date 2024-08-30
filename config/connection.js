const Sequelize = require('sequelize');
require('dotenv').config();

if (!process.env.DB_NAME || !process.env.DB_USER || !process.env.DB_PASSWORD) {
  throw new Error('Missing required environment variables: DB_NAME, DB_USER, or DB_PASSWORD');
}

const sequelize = new Sequelize(
  process.env.DB_NAME,      // 'ecommerce_db'
  process.env.DB_USER,      // 'postgres'
  process.env.DB_PASSWORD,  // 'my_password'
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432,
  }
);

module.exports = sequelize;
