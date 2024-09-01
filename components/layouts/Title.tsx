import React from "react";
import { Text } from "react-native";
import styles from "styles/layouts/Title";

type Props = {
  children: string | React.ReactNode;
};

export default function Title({ children }: Props) {
  return <Text style={styles.title}>{children}</Text>;
}
