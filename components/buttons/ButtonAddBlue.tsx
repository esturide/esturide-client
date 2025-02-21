import * as React from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '@styles/InputButtons';

const ButtonAddBlue = () => {
  return (
    <View style={styles.btnAddBlue}>
      <MaterialIcons name="add" style={styles.btnAddIcon} />
    </View>
  );
};

export default ButtonAddBlue;
