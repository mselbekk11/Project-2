// function fact(req, res) {
//   fetch('https://catfact.ninja/fact')
//     .then((res) => res.json())
//     .then((cat) => {
//       console.log(cat)
//       res.render('cats/fact', {
//         fact: cat.fact,
//       })
//     })
// }



// function fact(req, res) {
//   fetch(
//     'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=7y0ehPimp6X6gnemHISSG0QiqAM9FZOz'
//   )
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((error) => {
//       console.error('API request failed', error)
//     })
//   res.render('cats/fact', {
//     title: '',
//   })
// }

function fact() {
  // let searchInputTxt = document.getElementById('search-input').value.trim();
  fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=7y0ehPimp6X6gnemHISSG0QiqAM9FZOz`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        console.log(data)
        const events = data._embedded.events
        events.forEach((event) => {
          console.log(event.name)
        })
        // mealList.classList.remove('notFound')
      } else {
        console.log('Wrong!')
        // mealList.classList.add('notFound')
      }
    })
}


module.exports = {
  fact,
}