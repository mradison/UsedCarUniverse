const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
  checkPassword(password) {
    return bcrypt.compareSync(password, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8], // Minimum password length
      },
    },
    // Add other user attributes as needed
  },
  {
    sequelize,
    modelName: 'user',
    timestamps: true,
    underscored: true,
    hooks: {
      beforeCreate: async (user) => {
        user.password = await bcrypt.hash(user.password, 10);
        return user;
      },
    },
  }
);

class Car extends Model {}

Car.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    make: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Add other car attributes as needed
  },
  {
    sequelize,
    modelName: 'car',
    timestamps: true,
    underscored: true,
  }
);

class VehicleListing extends Model {}

VehicleListing.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Add attributes related to vehicle listings
  },
  {
    sequelize,
    modelName: 'vehicle_listing',
    timestamps: true,
    underscored: true,
  }
);

class Review extends Model {}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Add attributes related to reviews
  },
  {
    sequelize,
    modelName: 'review',
    timestamps: true,
    underscored: true,
  }
);

class SupportQuery extends Model {}

SupportQuery.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Add attributes related to support queries
  },
  {
    sequelize,
    modelName: 'support_query',
    timestamps: true,
    underscored: true,
  }
);

class CarHistoryReport extends Model {}

CarHistoryReport.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Add attributes related to car history reports
  },
  {
    sequelize,
    modelName: 'car_history_report',
    timestamps: true,
    underscored: true,
  }
);

module.exports = { User, Car, VehicleListing, Review, SupportQuery, CarHistoryReport };

