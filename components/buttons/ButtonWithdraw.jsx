import * as React from 'react';
import { Text, View } from 'react-native';
import styles from '@styles/InputButtons';

/**
 * @deprecated This component is deprecated and will be removed in future versions.
 * Please use `InputButton` instead.
 */
const ButtonWithdraw = () => {
  return (
    <View style={styles.btnRetirar}>
      <Text style={styles.btnRetirarTexto}>Retirar</Text>
    </View>
  );
};

export default ButtonWithdraw;
