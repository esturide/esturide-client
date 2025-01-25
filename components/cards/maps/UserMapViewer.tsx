import MapView from 'react-native-maps';
import React from 'react';
import { useUserPosition } from '@components/context/UserCurrentLocation';
import { StyleSheet } from 'react-native';

type Props = {
  latitudeDelta: number;
  longitudeDelta: number;
};

export default function UserMapViewer({
  latitudeDelta,
  longitudeDelta,
}: Props) {
  const { setRefresh, location } = useUserPosition();

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
    width: '100%',
    height: '100%',
  },
});
