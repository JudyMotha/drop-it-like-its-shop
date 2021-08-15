 
// Calls items.json to populate Groceryitems table
const sequelize = require('../config/configuration');
const  Grocery = require('../models/GroceryItems');
const groceryData = require('./items.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await GroceryItems.bulkCreate(item, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};
seedDatabase();



