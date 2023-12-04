const router = require('express').Router()
const axios = require('axios');
const { Cars, Car } = require('../models');
require('dotenv').config();


router.get('/', async (req, res) => {
  res.render('homepage', {
    logged_in: req.session.user_id
  })
})

router.get('/carlist/:model', async (req, res) => {

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

router.get('/login', async (req, res) => {
  res.render('login')
})

// Import your Car model
// const Car = require('../models/Car'); // Uncomment and modify as per your model file

const carController = {
  // List All Cars
  getAllCars: async (req, res) => {
      try {
          // Replace the below line with actual database query logic
          // const cars = await Car.findAll();
          res.json(cars);
      } catch (error) {
          res.status(500).send('Error fetching cars');
      }
  },

  // Get Car Details
  getCarDetails: async (req, res) => {
      try {
          // Replace the below line with actual database query logic
          // const car = await Car.findByPk(req.params.id);
          if (car) {
              res.json(car);
          } else {
              res.status(404).send('Car not found');
          }
      } catch (error) {
          res.status(500).send('Error fetching car details');
      }
  },

  // Update Car Information
  updateCarInfo: async (req, res) => {
      try {
          // Add your update logic here, and return the updated car details
          // const updatedCar = await Car.update(req.body, { where: { id: req.params.id } });
          res.send('Car updated successfully');
      } catch (error) {
          res.status(500).send('Error updating car');
      }
  },

  // Delete a Car Listing
  deleteCarListing: async (req, res) => {
      try {
          // Add your delete logic here
          // await Car.destroy({ where: { id: req.params.id } });
          res.send('Car deleted successfully');
      } catch (error) {
          res.status(500).send('Error deleting car');
      }
  }
};

module.exports = carController;



module.exports = router