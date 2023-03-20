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

let apiKey = "96f59ob69a32facbb34b2tdb5d2e7405";
let city = "Bologna";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

axios.get(apiUrl).then(showDefaultWeather);

new Date();
