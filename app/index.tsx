import { StyleSheet, Text, View } from "react-native";
import { Link, Redirect } from "expo-router";
import Constants from "expo-constants";

function StartPage() {
  return (
    <View style={styles.container}>
      <Text>Start page</Text>
      <Link href={"buttons"}>Buttons</Link>
    </View>
  );
}

let AppEntryPoint = StartPage;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("../.ondevice").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default AppEntryPoint;
