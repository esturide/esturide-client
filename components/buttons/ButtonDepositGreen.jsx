import * as React from 'react';
import { Text, View } from 'react-native';
import styles from '@styles/InputButtons';

const ButtonDepositGreen = () => {
  return (
    <View style={styles.btnDepositarVerde}>
      <Text style={styles.btnDepositarVerdeTexto}>Depositar</Text>
    </View>
  );
};

export default ButtonDepositGreen;
