import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Map, { Position } from '@components/cards/Map';
import * as Location from 'expo-location';
import loaderEffect from '@libs/loaderEffect';
import Loading from '@components/visuals/resources/Loading';
import { showFailureMessage, showSuccessMessage } from '@libs/toast/messages';
import { router } from 'expo-router';
import ButtonLocationBlue from '@components/buttons/location/ButtonLocationBlue';
import AbsoluteLayout from '@components/layouts/AbsoluteLayout';

export default function SelectMap() {
  const [location, setLocation] = useState<Position | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      await loaderEffect(async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
          showFailureMessage('No se pudo acceder a la ubicacion.');
        }

        let locationObject = await Location.getCurrentPositionAsync({});

        setLocation({
          latitude: locationObject.coords.latitude,
          longitude: locationObject.coords.longitude,
        });
      }, setLoading);
    })();
  }, []);

  const onPress = async () => {
    router.push('/user/maps/driver/schedule-travel');
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Loading visible={true} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Map origin={location} />
        <AbsoluteLayout>
          <ButtonLocationBlue onPress={onPress} />
        </AbsoluteLayout>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
