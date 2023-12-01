const sequelize = require('../config/connection');
const seedCars = require('./carsData');
const seedCar = require('./carData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCars();

  await seedCar();

  process.exit(0);
};

seedAll();
