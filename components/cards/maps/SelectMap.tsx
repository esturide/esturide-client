import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useUserPosition } from '@components/context/UserCurrentLocation';

type Props = {
  latitudeDelta?: number;
  longitudeDelta?: number;
};

export default function SelectMap({
  latitudeDelta = 0.0021,
  longitudeDelta = 0.0021,
}: Props) {
  const { location } = useUserPosition();
  const [markers, setMarkers] = useState([]);

  const handlePress = (event) => {
    const newMarker = {
      coordinate: event.nativeEvent.coordinate,
      key: Math.random().toString(),
    };

    setMarkers([newMarker]);
  };

  return (
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
    >
      {markers.map((marker) => (
        <Marker key={marker.key} coordinate={marker.coordinate} />
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
