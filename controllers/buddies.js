module.exports = {
  index,
}

function index(req, res) {
  res.render('buddies/index', { title: '' })
}
