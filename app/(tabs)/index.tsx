import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { InputButton } from "@/components/Buttons/InputButton";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home page</Text>
      <Link href={"/"}>Return to main page</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
