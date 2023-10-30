const express = require('express')
const router = express.Router()

const buddiesCtrl = require('../controllers/buddies')

// GET /movies
router.get('/', buddiesCtrl.index)

module.exports = router
