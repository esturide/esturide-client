import React from "react";
import { View } from "react-native";
import styles from "@/styles/layouts/register/RegisterLayoutStyle";

interface Props {
  children: string | React.ReactNode;
}

export default function LayoutRegister({ children }: Props): JSX.Element {
  return (
    <>
      <View style={styles.container}>{children}</View>
    </>
  );
}
