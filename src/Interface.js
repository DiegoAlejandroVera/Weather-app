import Search from './assets/images/icons8-search-100.svg'
import RainImg from './assets/images/rain.png'
import HumidityImg from './assets/images/humidity.png'
import WindImg from './assets/images/wind.png'

function createWeatherCard () {
  return `
    <div class="weather">
      <img src="${RainImg}" class="weather-icon" />
      <h1 class="temp">22°C</h1>
      <h2 class="city">New York</h2>
      ${createDetailsCard()}
    </div>
  `
}

function createDetailsCard () {
  return `
    <div class="details">
      <div class="col">
        <img src="${HumidityImg}" />
        <div>
          <p class="humidity">50%</p>
          <p>Humidity</p>
        </div>
      </div>
      <div class="col">
        <img src="${WindImg}" />
        <div>
          <p class="wind">15 km/h</p>
          <p>Wind speed</p>
        </div>
      </div>
    </div>
  `
}

export function createSearchInput () {
  return `
    <div class="card">
      <div class="search">
        <input type="text" placeholder="entry a city name" spellcheck="false" />
        <button>
          <img src="${Search}"/>
        </button>
      </div>
      <div class="error">
        <p>Invalid city name</p>
      </div>
      ${createWeatherCard()}
    </div>
  `
}
