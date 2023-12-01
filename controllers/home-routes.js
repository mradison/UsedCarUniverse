const router = require('express').Router()


router.get('/', async (req, res)=> {
    res.render('homepage', {
        logged_in: req.session.user_id
    })
})
router.get('/login', async (req, res)=> {
    res.render('login')
})

module.exports = router