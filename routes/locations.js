const express = require('express')
const router = express.Router()

const locationsCtrl = require('../controllers/locations')
const ensureLoggedIn = require('../config/ensureLoggedIn')

// GET /movies
router.get('/', ensureLoggedIn, locationsCtrl.index)

module.exports = router
