import { View } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";

import Constants from "expo-constants";
import Title from "@/components/layouts/Title";
import Logo from "@/components/resources/Logo";
import styles from "@/styles/layouts/SignUpLayout";

export const StartPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/sign-up/log-in");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.flexContainer}>
      <Logo />
      <Title>ESTU RIDE</Title>
    </View>
  );
};

let AppEntryPoint = StartPage;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("../.ondevice").default;
}

export default AppEntryPoint;
