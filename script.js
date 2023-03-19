function showDefaultWeather(response) {
  console.log(response);
}

let apiKey = "96f59ob69a32facbb34b2tdb5d2e7405";
let city = "Bologna";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

axios.get(apiUrl).then(showDefaultWeather);
