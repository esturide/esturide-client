import React from "react";
import { Text } from "react-native";
import styles from "@/styles/layouts/TitleStyle";

type Props = {
  children: string | React.ReactNode;
  style?: object;
};

export default function Title({ children, style }: Props) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}
