import * as React from "react";
import { Text, View } from "react-native";
import styles from "@/styles/InputButtons";

/**
 * @deprecated This component is deprecated and will be removed in future versions.
 * Please use `InputButton` instead.
 */
const BtnDepositarConductor = () => {
  return (
    <View style={styles.btnDepositarVerde}>
      <Text style={styles.btnDepositarVerdeTexto}>Depositar</Text>
    </View>
  );
};

export default BtnDepositarConductor;
