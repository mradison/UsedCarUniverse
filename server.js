const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions with cookies
const sess = {
  secret: 'Super secret secret',
  cookie: {
    // Stored in milliseconds
    maxAge: 24 * 60 * 60 * 1000, // expires after 1 day
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});

// $(document).ready(function () {


//   getCar()

//   //scroll back to top button
//   $('.top').on('click', function () {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   });

//   var model = 'camry';
//   // pulls random recipes from api
//   function getCar(car) {
//     var apiURL = `https://api.api-ninjas.com/v1/cars?model=${model}`

//     fetch(apiURL, {
//       headers: {
//         'X-Api-Key': 'wvSSR9wHZbLXlJPozQR3NA==tzNedxcrYn11gHTl'
//       },

//     })
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         console.log(data);

//         for (var i = 0; i < data.length; i++) {
//           let carMake = document.createElement('li');
//           let carModel = document.createElement('li');
//           let carClass = document.createElement('li');
//           let carYear = document.createElement('li');
//           let carMilesPerGallon = document.createElement('li');

//           carMake.textContent = data.hits[i].label;

//           container.append(carMake);
//           container.append(carModel);
//           container.append(carClass);
//           container.append(carYear);
//           container.append(carMilesPerGallon);

//         }
//       })
//   }
// })

