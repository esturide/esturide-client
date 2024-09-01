import React from "react";
import { View } from "react-native";
import styles from "@/styles/layouts/RegisterLayout";

interface Props {
  children: string | React.ReactNode;
}

export default function RegisterLayout({ children }: Props): JSX.Element {
  return (
    <>
      <View style={styles.container}>{children}</View>
    </>
  );
}
