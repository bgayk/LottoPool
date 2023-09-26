const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

const lotteriesRoutes = require('./lotteriesRoutes');
const lotteryDrawings = require('./lotteryDrawings');
const lotteryTickets = require('./lotteryTickets');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

router.use('/lotteries', lotteriesRoutes);
router.use('/lotteryDrawings', lotteryDrawings);
router.use('/lotteryTickets', lotteryTickets);

module.exports = router;
