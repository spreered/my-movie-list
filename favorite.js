(function () {
  const BASE_URL = 'http://localhost:3000'
  const INDEX_URL = BASE_URL + '/api/v1/movies/'
  const POSTER_URL = BASE_URL + '/posters/'
  const data = JSON.parse(localStorage.getItem('favoriteMovie')) || []
})()
