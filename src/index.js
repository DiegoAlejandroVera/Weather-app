import Styles from '../styles.css'
import { createSearchInput } from './Interface'
import CloudsImg from './assets/images/clouds.png'
import ClearImg from './assets/images/clear.png'
import RainImg from './assets/images/rain.png'
import DrizzleImg from './assets/images/drizzle.png'
import MistImg from './assets/images/mist.png'

const apiKey = '32083bc61be170c327cc25ba45887b05'
const baseURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}`

function makeRequest () {
  const query = document.querySelector('input').value
  checkWeather(query)
}

async function checkWeather (query) {
  const response = await fetch(baseURL + `&q=${query}`)
  const data = await response.json()

  if (response.status === 404) {
    document.querySelector('.error').style = 'display: block;'
    document.querySelector('.weather').style = 'display: none;'
  }

  console.log(data)
  document.querySelector('.city').innerHTML = data.name
  document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)} °C`
  document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`
  document.querySelector('.wind').innerHTML = `${(data.wind.speed).toFixed(1)} km/h`

  if (data.weather[0].main === 'Clouds') {
    document.querySelector('.weather-icon').src = CloudsImg
  } else if (data.weather[0].main === 'Clear') {
    document.querySelector('.weather-icon').src = ClearImg
  } else if (data.weather[0].main === 'Rain') {
    document.querySelector('.weather-icon').src = RainImg
  } else if (data.weather[0].main === 'Drizzle') {
    document.querySelector('.weather-icon').src = DrizzleImg
  } else if (data.weather[0].main === 'Mist') {
    document.querySelector('.weather-icon').src = MistImg
  }

  document.querySelector('.weather').style = 'display: block;'
  document.querySelector('.error').style = 'display: none;'
}

function init () {
  const root = document.getElementById('root')
  const card = createSearchInput()

  root.innerHTML = card
  document.querySelector('button').addEventListener('click', () => {
    makeRequest()
    document.querySelector('input').value = ''
  })
}

init()
