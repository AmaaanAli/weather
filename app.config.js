import "dotenv/config";

export default ({ config }) => ({
  ...config,
  android: {
    package: "com.amaanaliy.weather",
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  extra: {
    API_KEY: process.env.API_KEY,
    eas: {
      projectId: "f9e61345-c8cf-45a8-8089-8efe3fbee0f7",
    },
  },
});
