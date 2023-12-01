const router = require('express').Router()
const request = require('request');
require('dotenv').config();


router.get('/', async (req, res) => {
  res.render('homepage', {
    logged_in: req.session.user_id
  })
})

router.get('/carlist', async (req, res) => {

  var model = 'camry'
  request.get({
    url: 'https://api.api-ninjas.com/v1/cars?model=' + model,
    headers: {
      'X-Api-Key': process.env.CARS_NINJA_APIKEY
    },
  }, function (error, response, body) {
    if (error) return console.error('Request failed:', error);
    else if (response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
    else console.log(body)
  });

  res.render('carlist', {
    logged_in: req.session.user_id
  })
})

router.get('/login', async (req, res) => {
  res.render('login')
})

module.exports = router