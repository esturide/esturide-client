import React from 'react';
import { View } from 'react-native';
import { Slot } from 'expo-router';
import styles from 'styles/layouts/SignUpLayout';

export default function () {
  return (
    <View style={styles.flexContainer}>
      <Slot />
    </View>
  );
}
