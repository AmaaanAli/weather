import { View, Text } from "react-native";

const WeatherDetails = ({ feelsLike, humidity, pressure }) => {
  return (
    <View className="flex-row flex-wrap justify-between mb-4">
      {/* Feels Like */}
      <View className="w-[50%] p-2">
        <View
          className="p-4 rounded-full items-center justify-center aspect-square"
          style={{ backgroundColor: "white" }}
        >
          <Text className="text-black text-5xl mb-1 text-center font-light mt-6">
            {feelsLike || "N/A"}°
          </Text>
          <Text
            className="text-black text-sm mb-2 text-center mt-4"
            style={{ letterSpacing: 4 }}
          >
            FEELS LIKE
          </Text>
        </View>
      </View>

      {/* Humidity View */}
      <View className="w-1/2 p-2 mt-5">
        <View className="bg-zinc-800 px-4 py-1 rounded-full items-center">
          <Text
            className="text-white text-sm mb-1 text-center mt-2"
            style={{ letterSpacing: 4 }}
          >
            HUMIDITY
          </Text>
          <Text
            className="text-white text-xl font-bold mb-1 text-center"
            style={{ letterSpacing: 2 }}
          >
            {humidity || "N/A"}%
          </Text>
        </View>

        {/* Pressure View */}
        <View
          className="px-4 py-1 rounded-full items-center mt-4"
          style={{ backgroundColor: "#EF0107" }}
        >
          <Text
            className="text-white text-sm mb-1 text-center mt-2"
            style={{ letterSpacing: 4 }}
          >
            PRESSURE
          </Text>
          <Text
            className="text-white text-xl font-semibold mb-1 text-center"
            style={{ letterSpacing: 1 }}
          >
            {pressure || "N/A"} hPa
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherDetails;
