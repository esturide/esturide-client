import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { InputButton } from "@/components/Buttons/InputButton";

export default function ExampleButtons() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buttons components</Text>

      <InputButton typeButton={"submit"} label={"Subir"} />
      <InputButton typeButton={"withdraw"} label={"Retirar"} />
      <InputButton typeButton={"depositBlue"} label={"Depositar"} />
      <InputButton typeButton={"depositGreen"} label={"Depositar"} />
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
