const Show = require('../models/show')
const User = require('../models/user')

module.exports = {
  index,
}

async function index(req, res) {
  const shows = await Show.find({})
  res.render('buddies/index', { shows })
}
