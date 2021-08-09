const sequelize = require('../config/connection');
const Grocery = require('../models/Grocery');
const groceryData = require('./grocery-seeds.json');
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await Grocery.bulkCreate(groceryData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};
seedDatabase();