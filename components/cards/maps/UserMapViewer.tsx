import MapView from 'react-native-maps';
import React, { useEffect } from 'react';
import { useUserPosition } from '@components/context/UserCurrentLocation';
import { StyleSheet } from 'react-native';

type Props = {
  latitudeDelta?: number;
  longitudeDelta?: number;
};

export default function UserMapViewer({
  latitudeDelta = 0.0021,
  longitudeDelta = 0.0021,
}: Props) {
  const { location } = useUserPosition();

  useEffect(() => {
    console.log('Current location set in: ', location);
  }, [location]);

  return (
    <MapView
      initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: latitudeDelta,
        longitudeDelta: longitudeDelta,
      }}
      style={styles.maps}
      scrollEnabled={true}
      showsUserLocation={true}
      showsMyLocationButton={true}
    ></MapView>
  );
}

const styles = StyleSheet.create({
  maps: {
    flex: 1,
  },
});
