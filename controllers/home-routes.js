const router = require('express').Router()

router.get('/', async (req, res) => {
  res.render('homepage', {
    logged_in: req.session.user_id, 
    email: req.session.email
  })
})

router.get('/login', async (req, res) => {
  res.render('login')
})

router.get('/signup', async (req, res) => {
    res.render('signup')
})

module.exports = router