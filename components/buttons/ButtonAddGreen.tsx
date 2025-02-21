import * as React from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '@styles/InputButtons';

const ButtonAddGreen = () => {
  return (
    <View style={styles.btnAddGreen}>
      <MaterialIcons name={'add'} style={styles.btnAddIcon} color={'white'} />
    </View>
  );
};

export default ButtonAddGreen;
