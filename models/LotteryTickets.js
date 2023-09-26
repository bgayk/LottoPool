const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class LotteryTickets extends Model {}

LotteryTickets.init(
  {
    lottery_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primayKey: true,
      references: { // foreign key
        model: 'lottery_drawings',
        key: 'id',
      },
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ball01: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    ball02: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    ball03: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    ball04: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    ball05: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    multiplier: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'lottery_tickets',
  });

module.exports = LotteryTickets;
