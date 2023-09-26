const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Lotteries extends Model {}

Project.init(
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
      allowNull: false,
    },
    user_max_purchase: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    multiplier_name: {
      type: DataTypes.STRING,
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
    modelName: 'lotteries',
  }
);

module.exports = Lotteries;
