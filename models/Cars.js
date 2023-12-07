const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cars extends Model { }

Cars.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        city_mpg: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        class: {
            type: DataTypes.STRING,
        },
        combination_mpg: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cylinders: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        displacement: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        drive: {
            type: DataTypes.STRING,
        },
        fuel_type: {
            type: DataTypes.STRING,
        },
        highway_mpg: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        make: {
            type: DataTypes.STRING,
        },
        model: {
            type: DataTypes.STRING,
        },
        trasmission: {
            type: DataTypes.STRING,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'cars',
    }
);

module.exports = Cars;
