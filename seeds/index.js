// What is this file doing?
// Fill in here: 
const sequelize = require('../config/configuration');
const { Grocery } = require('../models/');
const item = require('./item.json');
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await Grocery.bulkCreate(groceryData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};
seedDatabase();