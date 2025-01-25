import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
import { router } from 'expo-router';
import loaderEffect from '@libs/loaderEffect';
import { showFailureMessage } from '@libs/toast/messages';
import AbsoluteBottomLayout from '@components/layouts/AbsoluteBottomLayout';
import ButtonLocationBlue from '@components/buttons/location/ButtonLocationBlue';
import { SelectMap } from '@components/cards/maps/SelectMap';
import { useTravelScheduleRoute } from '@components/context/RouteNavigatorContext';
import { Position } from '@const/Position';

export default function SelectDestination() {
  const { currentRoute, setCurrentRoute } = useTravelScheduleRoute();
  const [location, setLocation] = useState<Position | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      await loaderEffect(async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();

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
    router.back();
  };

  return (
    <View style={styles.container}>
      <SelectMap />
      {location !== null && (
        <AbsoluteBottomLayout>
          <ButtonLocationBlue onPress={onPress} />
        </AbsoluteBottomLayout>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
