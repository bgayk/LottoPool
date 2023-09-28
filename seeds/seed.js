const sequelize = require('../config/connection');
const { User, Project, Lotteries, UserPurchases, LotteryDrawings, LotteryTickets } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');

const userPurchasesData = require('./UserPurchasesData.json');
const lotteriesData = require('./lotteriesData.json');
const lotteryDrawingsData = require('./LotteryDrawingsData.json');
const lotteryTicketsData = require('./LotteryTicketsData.json');



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


  for (const lotteries of lotteriesData) {
    await Lotteries.create({
      ...lotteries,
    });
  }
  
  for (const lotterydrawing of lotteryDrawingsData) {
    await LotteryDrawings.create({
      ...lotterydrawing,
    });
  }

  for (const lotteryticket of lotteryTicketsData) {
    await LotteryTickets.create({
      ...lotteryticket,
    });
  }

  for (const userpurchase of userPurchasesData) {
    await UserPurchases.create({
      ...userpurchase,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  
  process.exit(0);
};

seedDatabase();
