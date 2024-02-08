const apiKey = "a4bc0456c041fd6ec8a1dd46729555cf";
const apiCountryURL = "https://flagsapi.com/BR/flat/64.png";

const cityInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#search');

const cityElement = document.querySelector('#city');
const tempElement = document.querySelector('#temperature span')
const DescripElement = document.querySelector('#description')
const WeatherIconElement = document.querySelector('#weather-icon')
const CountyElement = document.querySelector('#country')
const umidityElement = document.querySelector('#umidity span')
const windElement = document.querySelector('#wind span')


const getWeatherData = async (city) => {
    const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherUrl);
    const data = await res.json();

    console.log(data);

}

const showWeatherData = (city) => {
    getWeatherData(city);
};


searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const city = cityInput.value;
    showWeatherData(city);
});