const express = require('express')
const router = express.Router()

const profileCtrl = require('../controllers/profile')

// GET /movies
router.get('/', profileCtrl.index)

router.post('/shows', profileCtrl.create)

module.exports = router
