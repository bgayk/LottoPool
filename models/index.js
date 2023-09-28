const User = require('./User');
const Project = require('./Project');
const UserPurchases = require('./UserPurchases');
const Lotteries = require('./Lotteries');
const LotteryDrawings = require('./LotteryDrawings');
const LotteryTickets = require('./LotteryTickets');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(UserPurchases, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

UserPurchases.belongsTo(User, {
  foreignKey: 'user_id'
});

Lotteries.hasMany(LotteryDrawings, {
  foreignKey: 'lottery_id'
});

LotteryDrawings.belongsTo(Lotteries, {
  foreignKey: 'lottery_id',
  onDelete: 'CASCADE'
});

LotteryDrawings.hasMany(LotteryTickets, {
  foreignKey: 'lottery_drawings_id'
});

LotteryTickets.belongsTo(LotteryDrawings, {
  foreignKey: 'lottery_drawings_id',
  onDelete: 'CASCADE'
});





module.exports = { User, Project, UserPurchases, Lotteries, LotteryDrawings, LotteryTickets };
