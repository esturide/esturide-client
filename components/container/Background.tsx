import React from "react";
import { View } from "react-native";
import styles from "styles/Background";

interface Props {
  children: string | React.ReactNode;
}

export default function BackgroundContainer({ children }: Props): JSX.Element {
  return (
    <>
      <View style={styles.container}>{children}</View>
    </>
  );
}
