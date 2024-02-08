const apiKey = "a4bc0456c041fd6ec8a1dd46729555cf";

const cityInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#search');

const cityElement = document.querySelector('#city');
const tempElement = document.querySelector('#temperature span');
const DescripElement = document.querySelector('#description');
const WeatherIconElement = document.querySelector('#weather-icon');
const CountyElement = document.querySelector('#country')
const humidityElement = document.querySelector('#humidity span');
const windElement = document.querySelector('#wind span');
const weatherContainer = document.querySelector('#weather-data');

const errorMessageContainer = document.querySelector("#error-message");

const suggestionContainer = document.querySelector("#suggestions");
const suggestionButtons = document.querySelectorAll("#suggestions button");

const getWeatherData = async (city) => {
    const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherUrl);
    const data = await res.json();

    return data;
}


const showErrorMessage = () => {
    weatherContainer.classList.add("hide")
    errorMessageContainer.classList.remove("hide");
    

};

const showWeatherData = async (city) => {

    try {
        const data = await getWeatherData(city);

        if (data.cod === "404") {
            showErrorMessage();
            return;
        }

        cityElement.innerText = data.name;
        tempElement.innerText = parseInt(data.main.temp);
        DescripElement.innerText = data.weather[0].description;
        WeatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
        CountyElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`);
        humidityElement.innerText = `${data.main.humidity}%`;
        windElement.innerText = `${data.wind.speed}km/h`;
        weatherContainer.classList.remove("hide")

        cityInput.value = "";
    }
    catch (err) {
        console.log("erro: " + err)
    }
};


searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const city = cityInput.value;
    showWeatherData(city);
});

cityInput.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
        const city = e.target.value;
        showWeatherData(city);
    }
})

suggestionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const city = btn.getAttribute("id");

        showWeatherData(city);
    });
});