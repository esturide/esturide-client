import React from 'react';
import { View } from 'react-native';
import { Slot } from 'expo-router';
import RegisterFormContext from '@components/context/RegisterFormContext';

import styles from '@styles/layouts/SignUpLayout';

export default function SignUpLayout() {
  return (
    <View style={styles.flexContainer}>
      <RegisterFormContext>
        <Slot />
      </RegisterFormContext>
    </View>
  );
}
