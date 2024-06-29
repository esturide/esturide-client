import { Alert, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { InputButton } from "@/components/Buttons/InputButton";

function App() {
  const onPress = () => {
    Alert.alert("Alert", "Hello world from Message");
  };

  return (
    <View style={styles.container}>
      <InputButton
        label={"Hello world"}
        onPress={onPress}
        typeButton={"submit"}
      />
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
