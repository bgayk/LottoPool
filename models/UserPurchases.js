const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserPurchases extends Model {}

Project.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primayKey: true,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    lottery_drawings_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primayKey: true,
      references: {
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
    purchase_date: {
      type: DataTypes.DATE,
    },
    purchase_amt: {
      type: DataTypes.Decimal,
      allowNull: false,
      defaultValue: DataTypes.Decimal(0.00),
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_purchases',
  }
);

module.exports = UserPurchases;
