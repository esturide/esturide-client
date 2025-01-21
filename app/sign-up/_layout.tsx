import React from 'react';
import { View } from 'react-native';
import { Slot } from 'expo-router';

import styles from '@styles/layouts/SignUpLayout';
import RegisterFormContext from '@components/context/RegisterFormContext';

export default function SignUpLayout() {
  return (
    <View style={styles.flexContainer}>
      <RegisterFormContext>
        <Slot />
      </RegisterFormContext>
    </View>
  );
}
