const Sequelize = require('sequelize');
const sequelize = new Sequelize('mydatabase', 'root@localhost', 'Winnie01', {
  host: 'localhost',
  dialect: 'mysql'
});
