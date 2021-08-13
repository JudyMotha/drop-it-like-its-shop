const User = require('./User');
const GroceryList = require('./GroceryList');
const GroceryItems = require('./GroceryItems');

User.belongsTo(GroceryList, {
    foreignKey: 'id',
});

GroceryList.hasMany(GroceryItems, {
    foreignKey: 'list_id'
});


module.exports = { User, GroceryList, GroceryItems };

//grocery list has many grocery items
//user has one grocery list