// Import your Car model
const Car = require('../models/Car'); // Modify as per your model file path

const carController = {
    // List All Used Cars
    getAllCars: async (req, res) => {
        try {
            const cars = await Car.findAll();
            res.json(cars);
        } catch (error) {
            res.status(500).send('Error fetching cars');
        }
    },

    // Get Used Car Details
    getCarDetails: async (req, res) => {
        try {
            const car = await Car.findByPk(req.params.id);
            if (car) {
                res.json(car);
            } else {
                res.status(404).send('Car not found');
            }
        } catch (error) {
            res.status(500).send('Error fetching car details');
        }
    },

    // Update Used Car Information
    updateCarInfo: async (req, res) => {
        try {
            const updatedCar = await Car.update(req.body, { 
                where: { id: req.params.id } 
            });
            if (updatedCar[0] > 0) {
                res.send('Car updated successfully');
            } else {
                res.status(404).send('Car not found');
            }
        } catch (error) {
            res.status(500).send('Error updating car');
        }
    },

    // Delete a Used Car Listing
    deleteCarListing: async (req, res) => {
        try {
            const deleted = await Car.destroy({ where: { id: req.params.id } });
            if (deleted) {
                res.send('Car deleted successfully');
            } else {
                res.status(404).send('Car not found');
            }
        } catch (error) {
            res.status(500).send('Error deleting car');
        }
    }
};

module.exports = carController;
