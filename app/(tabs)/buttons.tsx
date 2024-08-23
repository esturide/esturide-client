import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { InputButton } from "@/components/Buttons/InputButton";
import { Link } from "expo-router";

export default function Buttons() {
  return (
    <View style={styles.container}>
      <InputButton typeButton={"submit"} label={"Subir"} />
      <InputButton typeButton={"withdraw"} label={"Retirar"} />
      <InputButton typeButton={"depositBlue"} label={"Depositar"} />
      <InputButton typeButton={"depositGreen"} label={"Depositar"} />
      <Link replace href="/GreenScreen">
        Home
      </Link>
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
