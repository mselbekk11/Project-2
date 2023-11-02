const Show = require('../models/show')

module.exports = {
  index,
  create,
}

function index(req, res) {
  res.render('index', {
    title: '',
    events: [],
  })
}

function create(req, res) {
  console.log(req.query)
  fetch(
    `https://app.ticketmaster.com/discovery/v2/events?apikey=7y0ehPimp6X6gnemHISSG0QiqAM9FZOz&locale=*&city=${req.query.showSearch}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        console.log(data)
        console.log(req.body)
        const events = data._embedded.events
        res.render('index', {
          events,
        })
      }
    })
    .catch((err) => console.log(err))
}
