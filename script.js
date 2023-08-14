
import {fetchWeatherData} from "./weatherFunction.js"


const cityInput = document.getElementById("cityInput");
const fetchButton = document.getElementById("fetchButton");

fetchButton.addEventListener("click", () => {
    const inputValues = cityInput.value.split(',').map(value => value.trim());

    const cityName = inputValues[0];
    const stateName = inputValues[1];
    const countryName = inputValues[2] || '';



    if (cityName !== "") {
        fetchWeatherData(cityName, stateName, countryName);
    }
});



