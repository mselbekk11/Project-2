const Show = require('../models/show')

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
  // console.log(shows)
  res.render('profile/index', { shows })
}

async function create(req, res) {
  // console.log(req.body)
  try {
    await Show.create(req.body)
  } catch (err) {
    console.log(err)
  }
  res.redirect('/profile')
}

// async function create(req, res) {
//   console.log(req.body)
//   const shows = await Show.create(req.body)
//   try {
//   } catch (err) {
//     console.log(err)
//   }
//   res.redirect('/profile')
// }
