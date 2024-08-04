import { Stack } from "expo-router";

export default function Layout() {
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
    </Stack>
  );
}
