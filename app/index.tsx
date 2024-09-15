import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import Constants from "expo-constants";
import Title from "@/components/layouts/Title";
import Logo from "@/components/resources/Logo";

export const StartPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/log-in");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <Logo />
      <Title>ESTU RIDE</Title>
    </>
  );
};

let AppEntryPoint = StartPage;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("../.ondevice").default;
}

export default AppEntryPoint;
