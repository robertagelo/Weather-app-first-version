function showDefaultWeather(response) {
  let defaultTemp = Math.round(response.data.temperature.current);
  let defaultDesc = response.data.condition.description;
  let defaultFeelsLikeTemp = Math.round(response.data.temperature.feels_like);
  let defaultHumidity = response.data.temperature.humidity;
  let defaultWindSpeed = response.data.wind.speed;
  let defaultIconUrl = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png `;

  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = `${defaultTemp}°C`;
  let description = document.querySelector("#weather-description");
  description.innerHTML = defaultDesc;
  let feelsLikeTemp = document.querySelector("#feels-like");
  feelsLikeTemp.innerHTML = `${defaultFeelsLikeTemp}°C`;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${defaultHumidity}%`;
  let windSpeed = document.querySelector("#wind-speed");
  windSpeed.innerHTML = `${defaultWindSpeed} km/h`;
  let icon = document.querySelector("#weather-icon");
  icon.innerHTML = `<img src="${defaultIconUrl}" alt="weather icon"></img>`;
}

function searchDefaultCity(defaultCity) {
  let apiKey = "96f59ob69a32facbb34b2tdb5d2e7405";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${defaultCity}&key=${apiKey}`;

  axios.get(apiUrl).then(showDefaultWeather);
}

searchDefaultCity("Bologna");

function showSearchedWeather(response) {
  let cityName = response.data.city;
  let cityTemp = Math.round(response.data.temperature.current);
  let cityDesc = response.data.condition.description;
  let cityFeelsLikeTemp = Math.round(response.data.temperature.feels_like);
  let cityHumidity = response.data.temperature.humidity;
  let cityWindSpeed = response.data.wind.speed;
  let cityIconUrl = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png `;

  let name = document.querySelector("#main-city");
  name.innerHTML = cityName;
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = `${cityTemp}°C`;
  let description = document.querySelector("#weather-description");
  description.innerHTML = cityDesc;
  let feelsLikeTemp = document.querySelector("#feels-like");
  feelsLikeTemp.innerHTML = `${cityFeelsLikeTemp}°C`;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${cityHumidity}%`;
  let windSpeed = document.querySelector("#wind-speed");
  windSpeed.innerHTML = `${cityWindSpeed} km/h`;
  let icon = document.querySelector("#weather-icon");
  icon.innerHTML = `<img src="${cityIconUrl}" alt="weather icon"></img>`;
}

function getSearchedWeather(city) {
  let apiCity = city.value;
  let apiKey = "96f59ob69a32facbb34b2tdb5d2e7405";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${apiCity}&key=${apiKey}`;

  axios.get(apiUrl).then(showSearchedWeather);
}

function showCityWeather(event) {
  event.preventDefault();
  let city = document.querySelector("#city-search");
  getSearchedWeather(city);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", showCityWeather);
