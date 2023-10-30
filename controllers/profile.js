module.exports = {
  index,
  fact,
}

function index(req, res) {
  res.render('profile/index', { title: '' })
}

function fact(req, res) {
  fetch('https://catfact.ninja/fact')
    .then((res) => res.json())
    .then((cat) => {
      console.log(cat)
      res.render('profile', {
        fact: cat.fact,
      })
    })
}
