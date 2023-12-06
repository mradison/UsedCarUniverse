const express = require('express');
const router = express.Router();
const carController = require('./carController'); // Adjust the path as necessary

// List All Cars
router.get('/', carController.getAllCars);

// Get Car Details
router.get('/:id', carController.getCarDetails);

// Update Car Information
router.put('/:id', carController.updateCarInfo);

// Delete a Car Listing
router.delete('/:id', carController.deleteCarListing);

module.exports = router;

