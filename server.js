const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');

// Import models
const User = require('./models/User'); // Import the User model
// Import other models here as necessary, for example:
// const Post = require('./models/Post');
// const Comment = require('./models/Comment');

// Import route controllers
const routes = require('./controllers'); // Adjust path as necessary
const additionalSpecificRoutes = require('./routes/additionalSpecificRoutes'); // Adjust path as necessary

const helpers = require('./utils/helpers');

// Initialize Express
const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions with cookies
const sess = {
  secret: 'Super secret secret',
  cookie: {
    // Stored in milliseconds (24 hours)
    maxAge: 24 * 60 * 60 * 1000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Use the imported routes
app.use(routes);
app.use('/api', additionalSpecificRoutes); // Add your additional specific routes under the '/api' path

// Sync sequelize models to the database, then start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}. Visit http://localhost:${PORT} to view the application.`)
  );
});
<<<<<<< HEAD


=======
>>>>>>> 14db13a7d615dc0fff5bc37d1105a3a9658cbe32
