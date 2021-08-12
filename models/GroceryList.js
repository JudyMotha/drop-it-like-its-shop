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
   },
   {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'grocery'
   }
);

module.exports = GroceryList;