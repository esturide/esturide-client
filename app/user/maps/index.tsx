import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { router } from 'expo-router';
import AdBanner from '@components/banners/AdBanner';
import ButtonLocationBlue from '@components/buttons/location/ButtonLocationBlue';
import { useUserPosition } from '@components/context/UserCurrentLocation';
import BlueButton from '@components/buttons/BlueButton';
import GreenButton from '@components/buttons/GreenButton';

export default function Index() {
  const { setRefresh } = useUserPosition();

  const onUpdate = async () => {
    setRefresh(true);
  };

  const onScheduleNewTravel = async () => {
    await onUpdate();
    router.push('/user/maps/driver/select-map');
  };

  return (
    <>
      <AdBanner />
      <View style={styles.container}>
        <View style={styles.message}>
          <Text style={styles.messageText}>
            Aun no tienes un viaje en tu lista.
          </Text>
        </View>

        <View style={styles.controls}>
          <GreenButton
            title={'Planificar nuevo viaje'}
            onPress={onScheduleNewTravel}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  message: {
    flexGrow: 1,
    alignContent: 'center',
    alignSelf: 'center',
  },
  messageText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  controls: {
    flexDirection: 'row-reverse',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
