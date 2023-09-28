// ?: why am I getting a 'SequelizeEagerLoadingError' when going to the homepage?
// A: You're getting this error because you're trying to access the User model from the Lotteries model, but you haven't included the User model in the query. 
// You can fix this by updating the findAll() method in the homepage route to include the User model, like so:
// ?: like how?
// A: You can update the findAll() method in the homepage route to include the User model, like so:
// const lotteriesData = await Lotteries.findAll({
//   include: [
//     {
//       model: User,
//       attributes: ['name'],
//     },
//   ],
// });
//
// // Serialize data so the template can read it
// const lotteries = lotteryData.map((lotteries) => lotteries.get({ plain: true }));
//
// // Pass serialized data and session flag into template
// res.render('homepage', {
//   lotteries,
//   logged_in: req.session.logged_in
// });
//   }
// });
//
// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/profile');
//     return;

// ?: why do I get the pretty print page when I go to the homepage?
// A: You're getting this error because you're trying to access the User model from the Lotteries model, but you haven't included the User model in the query.  
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening http://localhost:3001/'));
});
