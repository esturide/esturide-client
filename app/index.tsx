import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { Platform, View } from 'react-native';
import Constants from 'expo-constants';

import styles from '@styles/layouts/SignUpLayout';
import Welcome from '@components/resources/Welcome';

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
    <View style={styles.flexContainer}>
      <Welcome />
    </View>
  );
};

let AppEntryPoint = StartPage;

if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  AppEntryPoint = require('../.ondevice').default;
}

export default AppEntryPoint;
