import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
import { router } from 'expo-router';
import loaderEffect from '@libs/loaderEffect';
import { showFailureMessage } from '@libs/toast/messages';
import Loading from '@components/visuals/resources/Loading';
import Map, { Position } from '@components/cards/Map';
import ButtonLocationBlue from '@components/buttons/location/ButtonLocationBlue';
import AbsoluteLayout from '@components/layouts/AbsoluteLayout';
import { useTravelScheduleRoute } from '@components/context/RouteNavigatorContext';

export default function SelectMap() {
  const { currentRoute, setCurrentRoute } = useTravelScheduleRoute();
  const [location, setLocation] = useState<Position | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      await loaderEffect(async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
          showFailureMessage('No se pudo acceder a la ubicacion.');
        }

        const locationObject = await Location.getCurrentPositionAsync({});

        setLocation({
          latitude: locationObject.coords.latitude,
          longitude: locationObject.coords.longitude,
        });
      }, setLoading);
    })();
  }, []);

  const onPress = async () => {
    setCurrentRoute('/user/maps/driver/schedule-travel');
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
        {location !== null && (
          <AbsoluteLayout>
            <ButtonLocationBlue onPress={onPress} />
          </AbsoluteLayout>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
