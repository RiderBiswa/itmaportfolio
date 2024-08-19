document.addEventListener('DOMContentLoaded', () => {
    const apikey ='0e2411880f237c24f409819a7d8181fe';
    const city ='Bhubaneswar';
    const apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
 
    function fetchWeather() {
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            updateWeather(data);
        })
   
        
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherContainer = document.getElementById('weather');
            weatherContainer.innerHTML = 'Failed to load weather data. Please try again!';
       
        });

    }

    function updateWeather(data){
        const weatherIcon = document.getElementById('weatherIcon');
        const temperature = document.getElementById('temperature');
        const description = document.getElementById('description');

        const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = data.weather[0].description;
        temperature.textContent =`Temperature: ${data.main.temp}℃`;
        description.textContent = data.weather[0].description;
    }
});




