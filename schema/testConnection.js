const Sequelize = require('sequelize');

// Initialize Sequelize with your database credentials
const sequelize = new Sequelize('mydatabase', 'root@localhost', 'Winnie01', {
  host: 'localhost',
  dialect: 'mysql'
});

// Test database connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

