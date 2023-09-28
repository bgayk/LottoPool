const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Lotteries extends Model {}

Lotteries.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_min_purchase: {
      type: DataTypes.FLOAT,
      defaultValue: 2.00,
    },
    user_max_purchase: {
      type: DataTypes.FLOAT,
      defaultValue: 20.00,
    },
    multiplier_name: { // the name of the multiplier ball (e.g. Powerball)
      type: DataTypes.STRING,
    },
    multiplier_allowed: { // whether or not the multiplier purchase is allowed
      type: DataTypes.BOOLEAN, 
      allowNull: false,
      defaultValue: false,
    },
    draws_mon: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    draws_tue: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    draws_wed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    draws_thu: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,      
    },
    draws_fri: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    draws_sat: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    draws_sun: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
   // defaultScope: {
   //   order: [['id', 'DESC']],
   // },
    modelName: 'lotteries',
  }
);

module.exports = Lotteries;
