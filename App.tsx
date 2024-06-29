import { Alert, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import ExampleButtons from "@/app/ExampleButtons";

function App() {
  return <ExampleButtons />;
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.ondevice").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;
