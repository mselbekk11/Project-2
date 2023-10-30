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
  fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=7y0ehPimp6X6gnemHISSG0QiqAM9FZOz`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        console.log(data)
        const events = data._embedded.events
        res.render('index', {
          events,
        })
      }
    })
    .catch((err) => console.log(err))
}

// module.exports = {
//   index
// }

// function index(req, res) {
//   res.render("index", {
//     title: "Homepage"
//   });
// }
