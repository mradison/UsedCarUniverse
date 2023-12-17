const router = require('express').Router()
const axios = require('axios');
const { User, Car } = require('../models');
const withAuth = require('../utils/withAuth')

require('dotenv').config();

router.get('/list/:model', withAuth, async (req, res) => {
  var userModel = req.params.model
  try {
   
    const marketCheckApi = await fetch(`http://marketcheck-prod.apigee.net/v2/search/car/active?api_key=${process.env.marketCheckKey}&model=${userModel}&state=az`, {
      headers: {
        'method': 'GET', 
        'content-type': 'application/json'
      }
    })
    const marketData = await marketCheckApi.json()
    const data = await axios.get('https://api.api-ninjas.com/v1/cars?model=' + userModel, {
      headers: {
        'X-Api-Key': process.env.CARS_NINJA_APIKEY
      },
    });
   
    // console.log('marketCheck: ',marketData.listings[0]);

    // console.log(data.data)
    res.render('carlist', {
      logged_in: req.session.logged_in,
      userModel: userModel,
      data: data.data,
      mData: marketData.listings,
      email: req.session.email
    })

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