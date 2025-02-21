import * as React from 'react';
import { Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '@styles/InputButtons';
import { ButtonProps } from '@components/buttons/props/ButtonProps';

const ButtonLocationGreen = ({ onPress }: ButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.btnLocationGreen}>
        <View style={styles.btnLocationContainer}>
          <Icon name="gps-fixed" style={styles.gpsIcon} />
        </View>
      </View>
    </Pressable>
  );
};

export default ButtonLocationGreen;
