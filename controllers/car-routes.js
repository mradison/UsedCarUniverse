const router = require('express').Router()
const axios = require('axios');
const { Cars, Car } = require('../models');
const withAuth = require('../utils/withAuth')

require('dotenv').config();

router.get('/list/:model', withAuth, async (req, res) => {
  var userModel = req.params.model
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const data = await axios.get('https://api.api-ninjas.com/v1/cars?model=' + userModel, {
      headers: {
        'X-Api-Key': process.env.CARS_NINJA_APIKEY
      },
    });

    console.log(data.data)
    res.render('carlist', {
      logged_in: req.session.logged_in,
      userModel: userModel,
      data: data.data
    })

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/list/:model', withAuth, async (req, res) => {

//   var userModel = req.params.model
//   const data = await axios.get('https://api.api-ninjas.com/v1/cars?model=' + userModel,{
//     headers: {
//       'X-Api-Key': process.env.CARS_NINJA_APIKEY
//     },
//   });

//   console.log(data.data)

//   // , function (error, response, body) {
//   //   if (error) return console.error('Request failed:', error);
//   //   else if (response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
//   //   else console.log(body)
//   // }

//   res.render('carlist', {
//     // logged_in: req.session.user_id,
//     userModel: userModel,
//     data: data.data
//   })
// })


module.exports = router