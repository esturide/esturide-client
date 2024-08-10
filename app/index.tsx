import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useRouter } from "expo-router";
import Constants from "expo-constants";

const FlexContainer = ({ children, style }) => {
  return <View style={[styles.flexContainer, style]}>{children}</View>;
};

const Logo = () => {
  return <Image source={require("@/assets/logo.png")} style={styles.logo} />;
};

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const StartPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/logIn"); 
    }, 5000);

    return () => clearTimeout(timer); 
  }, [router]);

  return (
    <FlexContainer>
      <Logo />
      <Title>ESTU RIDE</Title>
    </FlexContainer>
  );
};

let AppEntryPoint = StartPage;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("../.ondevice").default;
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f2422",
    padding: 16,
  },
  logo: {
    width: 248,
    height: 248,
    marginBottom: 16,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 32,
  },
});

export default AppEntryPoint;
