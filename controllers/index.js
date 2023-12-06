const express = require('express');
const carRoutes = require('./routes/carRoutes'); // Adjust path if needed
const userRoutes = require('./routes/userRoutes'); // Adjust path if needed
const additionalspecificRoutes = require('./routes/additionalspecificRoutes'); // Adjust path if needed

const app = express();

// Setting up Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Middleware to parse JSON bodies
app.use(express.json());

// Welcome route
app.get('/', (req, res) => {
  res.send('Welcome to Used Car Universe!');
});

// Use route modules
// Ensure the base path corresponds to the type of routes
app.use('/api/cars', carRoutes);
app.use('/api/users', userRoutes);
app.use('/api/additional', additionalspecificRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

require('dotenv').config();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});