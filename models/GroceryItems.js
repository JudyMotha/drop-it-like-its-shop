const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/configuration');

// extend grocery class to the whole model
class GroceryItems extends Model {}

GroceryItems.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        list_id: {
            type: DataTypes.INTEGER
        },
        item: {
            type: DataTypes.STRING,
            allowNull: false
        },  
        // department:{
        //     type: DataTypes.STRING,
        //     allowNull: true
        // }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: false,
        modelName: 'groceryitems'
     }
)

module.exports = GroceryItems;