import React, { useEffect, useState } from 'react';
import { PermissionsAndroid, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Position } from '@const/Position';
import Loading from '@components/visuals/resources/Loading';
import { showSuccessMessage } from '@libs/toast/message/messages';

type Props = {
  latitudeDelta?: number;
  longitudeDelta?: number;
  location: Position;
};

export default function UserMapViewer({
  location,
  latitudeDelta = 0.0021,
  longitudeDelta = 0.0021,
}: Props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {}, [loading]);

  return (
    <>
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
        onMapReady={() => {
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          ).then((granted) => {
            setLoading(false);
          });
        }}
      ></MapView>
      <Loading visible={loading} modal />
    </>
  );
}

const styles = StyleSheet.create({
  maps: {
    flex: 1,
  },
});
