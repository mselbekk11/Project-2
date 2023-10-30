const express = require('express');
const router = express.Router();
const catsCtrl = require('../controllers/cats')

/* GET home page. */
router.get('/fact', catsCtrl.fact);

module.exports = router;