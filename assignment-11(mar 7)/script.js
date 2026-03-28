async function getWeather() {
  const city = document.getElementById("city").value;
  const status = document.getElementById("status");
  const weatherDiv = document.getElementById("weather");

  const apiKey = "f1b45cf671e03b57f0f0b9ba5521c93f"; // Replace with your API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    status.innerText = "Loading...";
    weatherDiv.innerHTML = "";

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    status.innerText = "";

    weatherDiv.innerHTML = `
      <h3>${data.name}</h3>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Weather: ${data.weather[0].main}</p>
    `;

  } catch (error) {
    status.innerText = "Error: " + error.message;
  }
}