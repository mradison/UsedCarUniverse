const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Adjust the path as necessary

const userController = {
    registerUser: async (req, res) => {
        try {
            const { email, password } = req.body;
            // Check if user already exists
            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                return res.status(400).send('User already exists');
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await User.create({ email, password: hashedPassword });
            res.status(201).json({ message: "User registered successfully", userId: newUser.id });
        } catch (error) {
            res.status(500).send('Error registering new user');
        }
    },

    loginUser: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ where: { email } });
            if (!user) {
                return res.status(404).send('User not found');
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).send('Invalid credentials');
            }

            // Generate JWT Token
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ message: 'User logged in successfully', token });
        } catch (error) {
            res.status(500).send('Error logging in user');
        }
    },

    // ... other functions like getUserProfile, updateUserProfile
};

module.exports = userController;
