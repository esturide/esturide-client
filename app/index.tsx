import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { Platform, View } from 'react-native';
import Constants from 'expo-constants';

import Title from '@components/layouts/Title';
import Logo from '@components/resources/Logo';
import styles from '@styles/layouts/SignUpLayout';

import { Provider } from 'jotai';

import 'react-native-reanimated';
import Toast from 'react-native-toast-message';

export const StartPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (Platform.OS === 'android' || Platform.OS === 'ios') {
        router.replace('/sign-up/log-in');
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <Provider>
      <View style={styles.flexContainer}>
        <Logo />
        <Title>ESTU RIDE</Title>
      </View>
      <Toast />
    </Provider>
  );
};

let AppEntryPoint = StartPage;

if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
  AppEntryPoint = require('../.ondevice').default;
}

export default AppEntryPoint;
