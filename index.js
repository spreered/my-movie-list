(function () {
  const BASE_URL = 'http://localhost:3000'
  const INDEX_URL = BASE_URL + '/api/v1/movies/'
  const POSTER_URL = BASE_URL + '/posters/'
  const data = []

  axios.get(INDEX_URL).then((response) => {
    data.push(...response.data.results)
    console.log(data)
  }).catch((err) => console.log(err))
})()
