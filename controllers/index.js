const router = require('express').Router();

const carRoutes = require('./car-routes');
const homeRoutes =  require('./home-routes');
const apiRoutes = require('./api');


router.use('/', homeRoutes);
router.use('/car', carRoutes);
router.use('/api', apiRoutes);

module.exports = router;