const router = require('express').Router()
const axios = require('axios');
const { Cars, Car } = require('../models');
require('dotenv').config();

router.get('/list/:model', async (req, res) => {

  var userModel = req.params.model
  const data = await axios.get('https://api.api-ninjas.com/v1/cars?model=' + userModel,{
    headers: {
      'X-Api-Key': process.env.CARS_NINJA_APIKEY
    },
  });

  console.log(data.data)

  // , function (error, response, body) {
  //   if (error) return console.error('Request failed:', error);
  //   else if (response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  //   else console.log(body)
  // }

  res.render('carlist', {
    // logged_in: req.session.user_id,
    userModel: userModel,
    data: data.data
  })
})


module.exports = router