(function () {
  const BASE_URL = 'http://localhost:3000'
  const INDEX_URL = BASE_URL + '/api/v1/movies/'
  const POSTER_URL = BASE_URL + '/posters/'
  const data = []

  axios.get(INDEX_URL).then((response) => {
    data.push(...response.data.results)
    displayDataList(data)
  }).catch((err) => console.log(err))

  function displayDataList (dataList) {
    const dataPanel = document.getElementById('data-panel')
    let htmlContent = ''
    dataList.forEach(function (item, index) {
      htmlContent += `
        <div class="col-sm-3">
          <div class="card mb-2">
            <img class="card-img-top " src="${POSTER_URL}${item.image}" alt="Card image cap">
            <div class="card-body movie-item-body">
              <h6 class="card-title">${item.title}</h5>
            </div>
            <div class="card-footer">
              <button class="btn btn-primary btn-show-movie" data-toggle="modal" data-target="#show-movie-modal">More</button>
            </div>
          </div>
        </div>
      `
    })
    dataPanel.innerHTML = htmlContent

    // add show Movie event listener
    dataPanel.addEventListener('click', (event) => {
      if (event.target.matches('.btn-show-movie')) {
        console.log(event.target)
      }
    })
  }
})()
