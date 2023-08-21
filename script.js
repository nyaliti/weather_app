function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}";
  
    // Make an API request to get the weather data for the specified city.
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Display the weather data in the `#weather` div.
        document.getElementById("weather").innerHTML = `
          <h2>Weather in ${data.name}</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Weather: ${data.weather[0].description}</p>
        `;
      });
  }
  