import { StyleSheet, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";

const FlexContainer: React.FC = () => {
  return (
    <View style={[styles.flexContainer]}>
      <Slot />
    </View>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f2422",
    padding: 16,
  },
});
