import { apiKey } from "./secrets";

import { getWeatherImageSrc} from "./weatherImages.js"
const weatherInfoContainer = document.getElementById("weather-info");

export function fetchWeatherData(cityName, stateName, countryName) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateName},${countryName}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            displayWeatherData(data);
        })
        .catch((error) => {
            console.log("Error fetching weather data:", error);
            weatherInfoContainer.innerHTML =
                "Error fetching weather data. Please try again later.";
        });
}


export function displayWeatherData(data) {
    const { name, main, weather } = data;
    const temperature = Math.round(main.temp).toString(); 
    const description = weather[0].description;
    const iconCode = weather[0].icon;

    let weatherImageSrc = getWeatherImageSrc(iconCode);

    const weatherHTML = `
      <h2>Weather in ${name}</h2>
      <p class="weather-description">${description}</p>
      <p class="temperature">Temperature: ${temperature}°C</p>
      <img class="weather-icon" src="${weatherImageSrc}" alt="Weather Icon">
  `;

    weatherInfoContainer.innerHTML = weatherHTML;
}