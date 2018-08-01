(function () {
  const BASE_URL = 'http://localhost:3000'
  const INDEX_URL = BASE_URL + '/api/v1/movies/'
  const POSTER_URL = BASE_URL + '/posters/'
  const data = []
  const dataPanel = document.getElementById('data-panel')

  axios.get(INDEX_URL).then((response) => {
    data.push(...response.data.results)
    displayDataList(data)
  }).catch((err) => console.log(err))

  function displayDataList (dataList) {
    let htmlContent = ''
    dataList.forEach(function (item, index) {
      htmlContent += `
        <div>
          <img src="${POSTER_URL}${item.image}">
          <h6>${item.title}</h6>
        </div>
        `
    })
    dataPanel.innerHTML = htmlContent
  }
})()
