import { View, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { formatTime } from "../utils/helpers";

const WeatherDetailCard = ({ weatherData }) => {
  return (
    <View className="flex-row flex-wrap justify-between mb-6">
      {[
        {
          label: "WIND SPEED",
          value: `${weatherData?.current?.wind_speed || "N/A"} m/s`,
          icon: "speedometer-slow",
        },
        {
          label: "VISIBILITY",
          value: `${(weatherData?.current?.visibility || 0) / 1000} km`,
          icon: "water-circle",
        },
        {
          label: "UV INDEX",
          value: weatherData?.current?.uv_index || "N/A",
          icon: "water-percent",
        },
        {
          label: "SUNRISE",
          value: formatTime(weatherData?.current?.sunrise),
          icon: "weather-hail",
        },
        {
          label: "SUNSET",
          value: formatTime(weatherData?.current?.sunset),
          icon: "weather-snowy-rainy",
        },
      ].map((item, index) => (
        <View key={index} className="w-1/2 p-3">
          <View className="bg-zinc-800 p-2 rounded-lg min-h-[160px] flex items-center justify-center">
            <Text
              className="text-white text-sm mb-1 text-center mt-2"
              style={{ letterSpacing: 4 }}
            >
              {item.label}
            </Text>
            <MaterialCommunityIcons
              className="flex justify-center items-center mt-2"
              name={item.icon}
              size={60}
              color="white"
            />
            <Text
              className="text-white text-base font-bold mt-2"
              style={{ letterSpacing: 2 }}
            >
              {item.value}
            </Text>
          </View>
        </View>
      ))}

      {/* Cloudiness */}
      <View className="w-1/2 p-3">
        <View
          className="p-4 rounded-full items-center justify-center aspect-square"
          style={{ backgroundColor: "white" }}
        >
          <Text className="text-black text-5xl font-light mb-1 text-center mt-6">
            {weatherData?.current?.cloudiness || "N/A"}%
          </Text>
          <Text
            className="text-black text-sm mb-2 text-center mt-4"
            style={{ letterSpacing: 4 }}
          >
            CLOUDINESS
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherDetailCard;
