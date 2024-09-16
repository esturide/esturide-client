import React from "react";
import { Image } from "react-native";
import styles from "@/styles/resources/Logo";

type Props = {
  style?: {};
};

export default function Logo({ style = styles.logo }: Props) {
  return <Image source={require("@/assets/logo.png")} style={style} />;
}
