import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { ActivityIndicator, Platform, View } from 'react-native';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

import Title from '@components/layouts/Title';
import Logo from '@components/resources/Logo';
import styles from '@styles/layouts/SignUpLayout';

import DriverProfileScreen from './dummy/DriverProfileScreen';
import DriverInfoScreen from './dummy/DriverInfoScreen';
import DriverDepositFundsScreen from './dummy/DriverDepositFundsScreen';
import DriverDepositSuccessScreen from './dummy/DriverDepositSuccessScreen';
import PassengerProfileScreen from './dummy/PassengerProfileScreen';
import PassengerDepositSuccessScreen from './dummy/PassengerDepositSuccessScreen';
import EmptyTripsScreenPassenger from './dummy/EmptyTripsScreenPassenger';

import DriveFeedCommunity from './dummy/driver/community/DriveFeedCommunity';


export const StartPage = () => {
  const router = useRouter();

  /*useEffect(() => {
    const timer = setTimeout(() => {
      if (Platform.OS == 'android' || Platform.OS == 'ios') {
        router.replace('/sign-up/log-in');
      } else {
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);



  return (
    <View style={styles.flexContainer}>
      <Logo />
      <Title>ESTU RIDE</Title>
      
    </View>
  );
};
*/
  return (
     <View style={{ flex: 1 }}>
      <DriveFeedCommunity/>
    </View>
  );
};

let AppEntryPoint = StartPage;

/*if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
  AppEntryPoint = require('../.ondevice').default;
}
*/
export default AppEntryPoint;
