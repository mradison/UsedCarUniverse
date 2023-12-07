const router = require('express').Router();

const userRoutes = require('./user-routes');
const additionalSpecificRoutes = require('./additionalSpecificRoutes');

router.use('/additional', additionalSpecificRoutes);
router.use('/users', userRoutes);

module.exports = router;