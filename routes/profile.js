const express = require('express')
const router = express.Router()

const profileCtrl = require('../controllers/profile')
const ensureLoggedIn = require('../config/ensureLoggedIn')

// GET /movies
router.get('/', profileCtrl.index)

router.post('/shows', ensureLoggedIn, profileCtrl.create)

router.delete('/shows/:id', ensureLoggedIn, profileCtrl.delete)

module.exports = router
