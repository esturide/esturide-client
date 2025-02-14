import React, { useState } from 'react';
import { PermissionsAndroid, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import MapMarker from '@components/cards/maps/markers/MapMarker';
import { Position } from '@const/Position';
import * as Crypto from 'expo-crypto';
import Loading from '@components/visuals/resources/Loading';
import { showSuccessMessage } from '@libs/toast/messages';

type Props = {
  latitudeDelta?: number;
  longitudeDelta?: number;
  location: Position;
};

export default function SelectDestinationMap({
  location,
  latitudeDelta = 0.0021,
  longitudeDelta = 0.0021,
}: Props) {
  const [loading, setLoading] = useState(true);
  const [markers, setMarkers] = useState([]);

  const handlePress = (event) => {
    const markerPosition = {
      key: Crypto.randomUUID(),
      coordinate: event.nativeEvent.coordinate,
    };

    setMarkers([markerPosition]);
  };

  return (
    <>
      <MapView
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: latitudeDelta,
          longitudeDelta: longitudeDelta,
        }}
        style={styles.map}
        onPress={handlePress}
        scrollEnabled={true}
        showsUserLocation={true}
        showsMyLocationButton={true}
        onMapReady={() => {
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          ).then((granted) => {
            setLoading(false);
            showSuccessMessage('Mapa cargado ✅.');
          });
        }}
      >
        {markers.map((marker) => (
          <View key={Crypto.randomUUID()}>
            <MapMarker
              coordinates={marker.coordinate}
              description={'Destino'}
              type={'destination'}
            />
          </View>
        ))}
      </MapView>
      <Loading visible={loading} modal />
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
