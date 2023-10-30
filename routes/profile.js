const express = require('express')
const router = express.Router()

const profileCtrl = require('../controllers/profile')

// GET /movies
router.get('/', profileCtrl.index)

module.exports = router
