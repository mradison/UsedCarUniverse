const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.mydatabase,
  process.env.root@localhost,
  process.env.Winnie01,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3000,
  }
);

module.exports = sequelize;
