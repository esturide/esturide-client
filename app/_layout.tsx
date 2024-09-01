import { Slot, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import React from "react";

function LayoutOther() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="logIn" />
      <Stack.Screen name="register" />
      <Stack.Screen name="register2" />
      <Stack.Screen name="register3" />
      <Stack.Screen name="passengerUser" />
      <Stack.Screen name="driverRegister" />
      <Stack.Screen name="driverRegister2" />
      <Stack.Screen name="termsAndConditions" />
      <Stack.Screen name="user" />
    </Stack>
  );
}

export default function Layout() {
  return (
    <View style={styles.flexContainer}>
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f2422",
    padding: 16,
  },
});
