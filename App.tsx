import {Alert, StyleSheet, Text, View} from "react-native";
import Constants from "expo-constants";
import {MyButton} from "@/components/Button/Button";

function App() {
  const onPress = () => Alert.alert("Alert message")

  return (
    <View style={styles.container}>
      <MyButton text={"Hello world"} onPress={onPress}/>
    </View>
  );
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
