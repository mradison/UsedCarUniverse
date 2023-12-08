const router = require('express').Router()
const axios = require('axios');
const { Cars, Car } = require('../models');
require('dotenv').config();

router.post('/', async (req, res) => {
  res.redirect(`/car/list/${req.body.model}`);
  res.status(200)
  res.end();
})

router.get('/', async (req, res) => {
  res.render('homepage', {
    logged_in: req.session.user_id
  })
})

router.get('/login', async (req, res) => {
  res.render('login')
})

router.get('/signup', async (req, res) => {
    res.render('signup')
})

module.exports = router