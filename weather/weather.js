// --- Weather Forecast Script (API-ready) ---
const weatherForm = document.getElementById("weatherForm");
const cityInput = document.getElementById("city");
const resultBox = document.getElementById("weatherResult");

const cityName = document.getElementById("cityName");
const description = document.getElementById("description");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

weatherForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    // --- Placeholder for API call (Replace with OpenWeatherMap API later) ---
    cityName.textContent = city;
    description.textContent = "Partly Cloudy";
    temperature.textContent = (Math.random() * (35 - 18) + 18).toFixed(1);
    humidity.textContent = Math.floor(Math.random() * 60 + 30);
    wind.textContent = (Math.random() * 20 + 5).toFixed(1);

    resultBox.classList.remove("hidden");
});