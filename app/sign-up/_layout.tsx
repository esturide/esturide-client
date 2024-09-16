import { Slot, Stack } from "expo-router";
import { View } from "react-native";
import React from "react";
import styles from "styles/layouts/SignUpLayout";

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

export default function () {
  return (
    <View style={styles.flexContainer}>
      <Slot />
    </View>
  );
}
