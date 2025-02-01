import { View, Text, TextInput } from "react-native";

const LocationAndWeatherInfo = ({ city, setCity, weatherData, error, onSubmit }) => {
  return (
    <View className="mb-6">
      <TextInput
        className="bg-zinc-800 text-white text-base mt-6 p-4 rounded-lg mb-6"
        placeholder="Enter city name"
        placeholderTextColor="#aaa"
        value={city}
        onChangeText={setCity}
        onSubmitEditing={onSubmit}
        returnKeyType="search"
        style={{
          textAlign: "center",
          textAlignVertical: "center",
          letterSpacing: 3,
        }}
      />

      {/* Error Message */}
      {error && <Text className="text-red-500 text-center mb-4">{error}</Text>}

      {/* Location and Current Temp */}
      <View className="flex-row justify-between mb-3">
        <Text
          className="text-white text-2xl font-bold ml-4"
          style={{ letterSpacing: 3 }}
        >
          {city}
        </Text>
        <Text
          className="text-white text-2xl font-bold mr-4"
          style={{ letterSpacing: 3 }}
        >
          {weatherData?.current?.temp || "N/A"}°C
        </Text>
      </View>
    </View>
  );
};

export default LocationAndWeatherInfo;
