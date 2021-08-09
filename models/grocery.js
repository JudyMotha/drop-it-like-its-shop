const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// extend grocery class to the whole model
class Grocery extends Model {}

Grocery.init(
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true
      },
 groceryitem: {
       type: DataTypes.STRING,
       allowNull: false
     },  
department:{
       type :DataTypes.STRING,
       allowNull: true
},
   },
   {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'grocery'
   }
);

module.exports = Grocery;