 
// Calls items.json to populate Groceryitems table
const sequelize = require('../config/configuration');
const GroceryItems = require('../models/GroceryItems');
const item = require('./items.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await GroceryItems.bulkCreate(item, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};
seedDatabase();



