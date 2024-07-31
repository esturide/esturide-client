import * as React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '@/styles/InputButtons'; 

const ButtonPassenger = () => {
    return (
      <View style={styles.btnPassenger}>
        <View style={styles.btnPassengerView}>
          <Icon name="person" style={styles.passengerIcon} />
        </View>
        <View style={styles.btnPassengerTextContainer}>
          <Text style={styles.btnPassengerLabel}>Label</Text>
          <Text style={styles.btnPassengerText}>Text</Text>
        </View>
      </View>
    );
  };

export default ButtonPassenger;
