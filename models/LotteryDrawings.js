const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class LotteryDrawings extends Model {}

LotteryDrawings.init(
  {
    lottery_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primayKey: true,
      references: { // foreign key
        model: 'lotteries',
        key: 'id',
      },
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    drawing_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validator: { // validate date is in the future (after today)
        isAfter: new Date()     
      }
    },
    estimated_winning_amt: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    winning_ball01: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: false,
    },
    winning_ball02: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: false,
    },
    winning_ball03: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: false,
    },
    winning_ball04: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: false,      
    },
    winning_ball05: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: false,
    },
    winning_multiplier: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: false,      
    }   
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'lottery_drawings',
  });

module.exports = LotteryDrawings;
