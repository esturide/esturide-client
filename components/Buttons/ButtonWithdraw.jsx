import * as React from "react";
import { Text, View } from "react-native";
import styles from "@/styles/InputButtons";

const ButtonWithdraw = () => {
  return (
    <View style={styles.btnRetirar}>
      <Text style={styles.btnRetirarTexto}>Retirar</Text>
    </View>
  );
};

export default ButtonWithdraw;
