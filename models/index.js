const User = require('./User');

const Car = require('./Car');


Car.belongsTo(User, {
  foreignKey: 'user_id',
});

//add user back - Completed
module.exports = { Car, User };
