import { Tabs } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

export default () => {
  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="buttons"
          options={{
            tabBarLabel: "Buttons",
            tabBarIcon: () => <FontAwesome name="gear" />,
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
};
