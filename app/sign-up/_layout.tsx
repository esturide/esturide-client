import { Slot } from "expo-router";
import { View } from "react-native";
import React from "react";
import styles from "styles/layouts/SignUpLayout";

export default function () {
  return (
    <View style={styles.flexContainer}>
      <Slot />
    </View>
  );
}
