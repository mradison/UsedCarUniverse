const router = require('express').Router();

const carRoutes = require('./car-routes');
const homeRoutes =  require('./home-routes');

router.use('/', homeRoutes);
router.use('/car', carRoutes);

module.exports = router;