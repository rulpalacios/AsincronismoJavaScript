const axios = require('axios')
const API = 'https://dragon-ball-api.herokuapp.com/api'

axios(`${API}/character`)
  .then(response => {
    return axios(`${API}/character/${response.data[1].name}`)
  })
  .then(response => {
    console.log(response.data.name)
    return axios(`${API}/planet/${response.data.originPlanet}`)
  })
  .then(response => {
    console.log(response.data.name)
  })
  .catch(err => console.error(err))