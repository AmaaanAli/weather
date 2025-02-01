import { View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { getAirQualityDescription } from "@/app/utils/helpers";

const AirQualityCard = ({ aqiValue, aqiIndex }) => {
  return (
    <View className="bg-zinc-800 p-4 rounded-lg mb-6 relative">
      <Text className="text-white text-sm mb-1" style={{ letterSpacing: 4 }}>
        AIR QUALITY
      </Text>
      <Text
        className="text-white text-3xl font-semibold mt-4"
        style={{ letterSpacing: 3 }}
      >
        {aqiValue || "N/A"} {getAirQualityDescription(aqiIndex)}
      </Text>
      <View className="absolute top-6 right-10">
        <Entypo name="leaf" size={60} color="#EF0107" />
      </View>
    </View>
  );
};

export default AirQualityCard;
