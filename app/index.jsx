import { ScrollView, RefreshControl, View } from "react-native";
import { useState, useEffect } from "react";
import { fetchWeatherData } from "@/app/utils/api";
import { getAirQualityDescription } from "@/app/utils/helpers";
import WeatherDetails from "@/app/components/WeatherDetails";
import WeatherDetailCard from "@/app/components/WeatherDetailCard";
import AirQualityCard from "@/app/components/AirQualityCard";
import LocationAndWeatherInfo from "@/app/components/LocationAndWeatherInfo";
import "@/global.css";

const WeatherScreen = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("London");
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setError(null);
      setRefreshing(true);
      const data = await fetchWeatherData(city);
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError(error.message);
      setWeatherData(null);
    } finally {
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchWeatherData(city);
  };

  const handleSubmit = () => {
    if (city.trim()) {
      fetchData();
    }
  };

  return (
    <ScrollView
      className="flex-1 bg-zinc-950 p-4"
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {/* Search Bar */}
      <LocationAndWeatherInfo
        city={city}
        setCity={setCity}
        weatherData={weatherData}
        error={error}
        onSubmit={handleSubmit}
      />

      {/* Air Quality */}
      <AirQualityCard
        aqiValue={weatherData?.airQuality?.aqiValue}
        aqiIndex={weatherData?.airQuality?.aqiIndex}
      />

      {/* Additional Weather Details */}
      <WeatherDetails
        feelsLike={weatherData?.current?.feels_like}
        humidity={weatherData?.current?.humidity}
        pressure={weatherData?.current?.pressure}
      />

      {/* Horizontal Line */}
      <View className="w-full h-px bg-slate-600 mb-5" />

      {/* Weather Details Container */}
      <WeatherDetailCard weatherData={weatherData} />
    </ScrollView>
  );
};

export default WeatherScreen;
