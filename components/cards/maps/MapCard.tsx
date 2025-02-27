import React, { useState } from 'react';
import { PermissionsAndroid, StyleSheet, View } from 'react-native';
import MapView, { Marker, LatLng, Region } from 'react-native-maps';
import Loading from '@components/visuals/resources/Loading';

type Props = {
  region: Region;
  origin: LatLng;
  destination: LatLng;
};

export default function MapCard({ region, origin, destination }: Props) {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <View style={styles.card}>
        <Loading visible={true} modal={false} />
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <MapView
        style={styles.map}
        initialRegion={region}
        scrollEnabled={false}
        showsUserLocation={true}
        showsMyLocationButton={true}
        onMapReady={() => {
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          ).then((granted) => {
            setLoading(false);
          });
        }}
      >
        <Marker coordinate={origin} />
        <Marker coordinate={destination} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  map: {
    width: '100%',
    height: 200,
  },
});
