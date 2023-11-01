module.exports = {
  index,
}

function index(req, res) {
  res.render('locations/index', { title: '' })
}
