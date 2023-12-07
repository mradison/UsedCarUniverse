const express = require('express');
const router = express.Router();
const AdditionalSpecificController = require('./additionalspecificController'); // Adjust the path as necessary

// Search for Cars
router.get('/cars/search', AdditionalSpecificController.searchCars);

// List of Makes and Models
router.get('/cars/makes', AdditionalSpecificController.getMakesAndModels);

// Support FAQ
router.get('/support/faq', AdditionalSpecificController.getFAQ);
router.post('/support/contact', AdditionalSpecificController.contactSupport);

// Posting, Managing, and Removing Vehicle Listings
router.post('/user/:userId/vehicles', AdditionalSpecificController.postVehicleListing);
router.get('/user/:userId/vehicles', AdditionalSpecificController.getAllVehicleListings);
router.get('/user/:userId/vehicles/:vehicleId', AdditionalSpecificController.getVehicleListing);
router.put('/user/:userId/vehicles/:vehicleId', AdditionalSpecificController.updateVehicleListing);
router.delete('/user/:userId/vehicles/:vehicleId', AdditionalSpecificController.deleteVehicleListing);

// Additional Features
router.post('/user/:userId/vehicles/:vehicleId/photos', AdditionalSpecificController.uploadVehiclePhotos);
router.get('/user/:userId/vehicles/:vehicleId/interest', AdditionalSpecificController.viewVehicleInterest);

// Car Reviews or Ratings
router.get('/cars/:id/reviews', AdditionalSpecificController.getCarReviews);
router.post('/cars/:id/reviews', AdditionalSpecificController.postCarReview);

// Car History Reports
router.get('/cars/:id/history', AdditionalSpecificController.getCarHistory);

// Price Valuation and Comparisons
router.get('/valuation', AdditionalSpecificController.getCarValuation);
router.get('/cars/compare', AdditionalSpecificController.compareCars);

// User Profile and Management
router.get('/users/:id/listings', AdditionalSpecificController.getUserListings);
router.put('/users/:id/settings', AdditionalSpecificController.updateUserSettings);

module.exports = router;



