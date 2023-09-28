const router = require('express').Router();
const { Lotteries, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/lotteries/:id', async (req, res) => {
  try {
    const lotteryData = await Lotteries.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const lottories = lotteryData.get({ plain: true });

    res.render('lotteries', {
      ...lottories,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/lotteries', withAuth, async (req, res) => {
  try {
    const newLotteries = await Lotteries.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newLotteries);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/lotteries/:id', withAuth, async (req, res) => {
  try {
    const lotteriesData = await Lotteries.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!lotteriesData) {
      res.status(404).json({ message: 'No Lottery found with this id!' });
      return;
    }

    res.status(200).json(lotteriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
