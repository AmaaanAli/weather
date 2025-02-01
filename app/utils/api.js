import Constants from "expo-constants";
const API_KEY = Constants.expoConfig.extra.API_KEY;

export const fetchWeatherData = async (city) => {
  try {
    // 1. Get coordinates
    const geoRes = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
    );
    if (!geoRes.ok) throw new Error(`Geocoding failed: ${geoRes.status}`);
    const geoData = await geoRes.json();
    if (!geoData?.length) throw new Error("City not found");
    const { lat, lon } = geoData[0];

    // 2. Get current weather data
    const weatherRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );
    if (!weatherRes.ok)
      throw new Error(`Weather data failed: ${weatherRes.status}`);
    const weatherData = await weatherRes.json();

    // 3. Get air quality data
    const airQualityRes = await fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    if (!airQualityRes.ok)
      throw new Error(`Air quality failed: ${airQualityRes.status}`);
    const airQualityData = await airQualityRes.json();

    const airQuality = airQualityData.list[0];

    return {
      current: {
        temp: weatherData.main?.temp || "N/A",
        feels_like: weatherData.main?.feels_like || "N/A",
        humidity: weatherData.main?.humidity || "N/A",
        visibility: weatherData.visibility || "N/A",
        wind_speed: weatherData.wind?.speed || "N/A",
        pressure: weatherData.main?.pressure || "N/A",
        sunrise: weatherData.sys?.sunrise || "N/A",
        sunset: weatherData.sys?.sunset || "N/A",
        uv_index: airQuality?.components?.o3 || "N/A",
        cloudiness: weatherData.clouds?.all || "N/A",
      },
      airQuality: {
        aqiIndex: airQuality?.main?.aqi || "N/A",
        aqiValue: airQuality?.components?.pm2_5 || "N/A",
      },
    };
  } catch (error) {
    throw error;
  }
};
