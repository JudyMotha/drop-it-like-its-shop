const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/configuration');

// extend grocery class to the whole model
class GroceryList extends Model {}

GroceryList.init(
   {
      id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
      },
      list_name: {
      type: DataTypes.STRING,
      },
      user_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      }
   },
   {
      sequelize,
      freezeTableName: true,
      underscored: false,
      modelName: 'GroceryList'
   }
);

module.exports = GroceryList;