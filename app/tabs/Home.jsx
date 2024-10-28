import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

const Home = () => {
  return (
    <View className="flex justify-center items-center text-4xl p-3">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
