const axios = require('axios')
const API = 'https://dragon-ball-api.herokuapp.com/api'

const getAllData = async () => {
  try {
    const characters = await axios(`${API}/character`)
    const character = await axios(`${API}/character/${characters.data[1].name}`)
    const planet = await axios(`${API}/character/${character.data.originPlanet}`)
    console.log(character.data.name)
    console.log(planet.data.name)
  } catch (error) {
    console.error(error)
  }
}

getAllData()