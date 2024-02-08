const apiKey = "a4bc0456c041fd6ec8a1dd46729555cf";
const apiCountryURL = "https://flagsapi.com/BR/flat/64.png";

const cityInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#search');

const showWeatherData = (city) = {

}


searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const city = cityInput.value;
    showWeatherData(city);
})