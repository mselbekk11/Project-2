const Show = require('../models/show')
const User = require('../models/user')

module.exports = {
  index,
  create,
  delete: deleteShow,
}

async function deleteShow(req, res) {
  const shows = await Show.deleteOne({
    _id: req.params.id,
  })
  console.log(shows)

  res.redirect(`/profile`)
}

async function index(req, res) {
  const shows = await Show.find({})
  res.render('profile/index', { shows })
}

async function create(req, res) {
  try {
    const user = await User.findById(req.user._id)
    console.log(user)
    const show = await Show.create(req.body)
    console.log(show)
    user.shows.push(show)
    user.save()
  } catch (err) {
    console.log(err)
  }
  res.redirect('/profile')
}
