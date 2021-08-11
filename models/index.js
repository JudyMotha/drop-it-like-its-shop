const User = require('./User');
const GroceryList = require('./GroceryList');

User.belongsTo(GroceryList, {
    foreignKey: 'id',
});

GroceryList.hasMany(GroceryItems, {
    foreignKey: 'id'
});


module.exports = { User, GroceryList, GroceryItems };

//grocery list has many grocery items
//user has one grocery list