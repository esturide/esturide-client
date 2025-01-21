import * as React from 'react';
import { Pressable, View } from 'react-native';
import { ButtonProps } from '@components/buttons/props/ButtonProps';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from '@styles/InputButtons';

const ButtonLocationBlue = ({ onPress }: ButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.btnLocationBlue}>
        <View style={styles.btnLocationContainer}>
          <Icon name="gps-fixed" style={styles.gpsIcon} />
        </View>
      </View>
    </Pressable>
  );
};

export default ButtonLocationBlue;
