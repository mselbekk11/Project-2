const express = require('express')
const router = express.Router()

const buddiesCtrl = require('../controllers/buddies')
const ensureLoggedIn = require('../config/ensureLoggedIn')

// GET /movies
router.get('/', ensureLoggedIn, buddiesCtrl.index)

module.exports = router
