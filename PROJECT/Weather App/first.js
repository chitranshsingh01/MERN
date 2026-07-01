const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", getWeather);

async function getWeather() {

    const city = document.getElementById("cityInput").value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    try {

        // Get latitude and longitude from city name
        const geoResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
        );

        const geoData = await geoResponse.json();

        if (!geoData.results) {
            document.getElementById("cityName").innerText = "City not found";
            document.getElementById("temperature").innerText = "--°C";
            document.getElementById("condition").innerText = "---";
            return;
        }

        const latitude = geoData.results[0].latitude;
        const longitude = geoData.results[0].longitude;
        const cityName = geoData.results[0].name;

        // Get weather data
        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
        );

        const weatherData = await weatherResponse.json();

        document.getElementById("cityName").innerText = cityName;
        document.getElementById("temperature").innerText =
            weatherData.current.temperature_2m + "°C";

        document.getElementById("condition").innerText =
            "Current Weather";

        document.getElementById("wind").innerText =
            weatherData.current.wind_speed_10m + " km/h";

        document.getElementById("humidity").innerText =
            weatherData.current.relative_humidity_2m + "%";

    } catch (error) {
        console.log(error);
        alert("Something went wrong");
    }
}