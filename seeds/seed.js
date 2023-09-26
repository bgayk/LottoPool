const sequelize = require('../config/connection');
const { User, Project } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');

const UserPurchases = require('./UserPurchases.json');
const Lotteries = require('./Lotteries.json');
const LotteryDrawings = require('./LotteryDrawings.json');
const LotteryTickets = require('./LotteryTickets.json');



const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });    
  }

  for (const userpurchase of UserPurchases) {
    await UserPurchases.create({
      ...userpurchase,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const lottery of Lotteries) {
    await Lotteries.create({
      ...lottery,
    });
  }

  for (const lotterydrawing of LotteryDrawings) {
    await LotteryDrawings.create({
      ...lotterydrawing,
    });
  }

  for (const lotteryticket of LotteryTickets) {
    await LotteryTickets.create({
      ...lotteryticket,
    });
  }
  
  process.exit(0);
};

seedDatabase();
