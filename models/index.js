const User = require('./User');
const Cars = require('./Cars');
const Car = require('./Car');

Cars.hasMany(Car, {
  foreignKey: 'cars_id',
});

Car.belongsTo(Cars, {
  foreignKey: 'cars_id',
});

//add user back - Completed
module.exports = { Cars, Car, User };
