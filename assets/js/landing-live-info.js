(function () {
  var seattleClockEl = document.getElementById("clock-seattle");
  var frankfurtClockEl = document.getElementById("clock-frankfurt");
  var weatherEl = document.getElementById("weather-issaquah");

  if (!seattleClockEl && !frankfurtClockEl && !weatherEl) {
    return;
  }

  function formatTime(timeZone) {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: timeZone,
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(new Date());
  }

  function updateClocks() {
    if (seattleClockEl) {
      seattleClockEl.textContent = formatTime("America/Los_Angeles");
    }

    if (frankfurtClockEl) {
      frankfurtClockEl.textContent = formatTime("Europe/Berlin");
    }
  }

  function weatherCodeToText(code) {
    var weatherMap = {
      0: "Clear sky",
      1: "Mainly clear",
      2: "Partly cloudy",
      3: "Overcast",
      45: "Fog",
      48: "Rime fog",
      51: "Light drizzle",
      53: "Moderate drizzle",
      55: "Dense drizzle",
      61: "Slight rain",
      63: "Moderate rain",
      65: "Heavy rain",
      71: "Slight snow",
      73: "Moderate snow",
      75: "Heavy snow",
      77: "Snow grains",
      80: "Slight rain showers",
      81: "Moderate rain showers",
      82: "Violent rain showers",
      85: "Slight snow showers",
      86: "Heavy snow showers",
      95: "Thunderstorm",
      96: "Thunderstorm with hail",
      99: "Thunderstorm with heavy hail",
    };

    return weatherMap[code] || "Current conditions";
  }

  function updateWeather() {
    if (!weatherEl) {
      return;
    }

    var weatherUrl =
      "https://api.open-meteo.com/v1/forecast?latitude=47.5301&longitude=-122.0326&current_weather=true&temperature_unit=celsius&windspeed_unit=mph&timezone=America%2FLos_Angeles";

    fetch(weatherUrl)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        return response.json();
      })
      .then(function (data) {
        if (!data || !data.current_weather) {
          throw new Error("Unexpected weather response");
        }

        var current = data.current_weather;
        var description = weatherCodeToText(current.weathercode);
        var temperature = Math.round(current.temperature);
        var wind = Math.round(current.windspeed);

        weatherEl.textContent =
          temperature + " C, " + description + ", Wind " + wind + " mph";
      })
      .catch(function () {
        weatherEl.textContent = "Weather unavailable right now.";
      });
  }

  updateClocks();
  updateWeather();

  setInterval(updateClocks, 1000);
  setInterval(updateWeather, 15 * 60 * 1000);
})();
