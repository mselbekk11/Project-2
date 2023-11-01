const Show = require('../models/show')
const User = require('../models/user')

module.exports = {
  index,
}

async function index(req, res) {
  const shows = await Show.find({})
  // console.log(shows)
  res.render('buddies/index', { shows })
}

// async function index(req, res) {
//   const users = await User.find({})
//   console.log(users)
//   users.shows.populate(req.body)
//   await user.save()
//   res.render('buddies/index', { title: '' })
// }

// async function index(req, res) {
//   const shows = await Show.find({})
//   // console.log(shows)
//   res.render('profile/index', { shows })
// }
