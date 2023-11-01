const Show = require('../models/show')
const User = require('../models/user')

module.exports = {
  index,
}

async function index(req, res) {
  const shows = await Show.find({})
  // console.log(shows)
  res.render('locations/index', { shows })
}

// async function index(req, res) {
//   const shows = await Show.find({})
//   // console.log(shows)
//   res.render('profile/index', { shows })
// }
