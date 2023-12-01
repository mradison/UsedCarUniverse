const { Car } = require('../models');

const cardata = [
  {
    city_mpg: 18,
    class: "midsize car",
    combination_mpg: 21,
    cylinders: 4,
    displacement: 2.2,
    drive: "fwd",
    fuel_type: "gas",
    highway_mpg: 26,
    make: "toyota",
    model: "camry",
    transmission: "a",
    year: 1993,
  },
  {
    city_mpg: 19,
    class: "midsize car",
    combination_mpg: 22,
    cylinders: 4,
    displacement: 2.2,
    drive: "fwd",
    fuel_type: "gas",
    highway_mpg: 27,
    make: "toyota",
    model: "camry",
    transmission: "m",
    year: 1993,
  },
];

const seedCar = () => Car.bulkCreate(cardata);

module.exports = seedCar;
