const router = require('express').Router();

const carRoutes = require('./car-routes');
const homeRoutes =  require('./home-routes');
// const apiRoutes = require('./api');

router.use('/car', carRoutes);
router.use('/', homeRoutes);
// router.use('/api', apiRoutes);

module.exports = router;


// // Welcome route
// router.get('/', (req, res) => {
//   res.send('Welcome to Used Car Universe!');
// });

// Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something went wrong!');
// });

// require('dotenv').config();

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
