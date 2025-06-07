async function Post() {
  try {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,cloud_cover,pressure_msl,wind_speed_10m,wind_direction_10m,wind_gusts_10m,surface_pressure,weather_code');
    const data = await response.json();
    console.log("Async GET:", data);
  } catch (error) {
    console.error('Error:', error);
  }
}

Post();