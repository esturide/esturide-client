import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import AdBanner from '@components/banners/AdBanner';
import { useUserPosition } from '@components/context/UserCurrentLocation';
import GreenButton from '@components/buttons/GreenButton';
import BlueButton from '@components/buttons/BlueButton';
import { useUserManagerContext } from '@components/context/UserManagerContext';

export default function Index() {
  const { setRefresh } = useUserPosition();
  const { userType } = useUserManagerContext();

  const onUpdate = async () => {
    setRefresh(true);
  };

  const onScheduleNewTravel = async () => {
    await onUpdate();

    if (userType === 'Driver') {
      router.push('/user/maps/driver/select-map');
    } else if (userType === 'Passenger') {
      router.push('/user/maps/passenger/search-travel');
    }
  };

  const ScheduleNewTravel = () => {
    return (
      <>
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
      </>
    );
  };

  const RequestNewRide = () => {
    return (
      <>
        <View style={styles.message}>
          <Text style={styles.messageText}>Aun no tienes un ride.</Text>
        </View>

        <View style={styles.controls}>
          <BlueButton title={'Solicitar'} onPress={onScheduleNewTravel} />
        </View>
      </>
    );
  };

  return (
    <>
      <AdBanner />
      <View style={styles.container}>
        {userType === 'Driver' ? <ScheduleNewTravel /> : <RequestNewRide />}
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
