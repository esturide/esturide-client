import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';

export function SelectMap() {
  const [markers, setMarkers] = useState([]);

  const handlePress = (event) => {
    const newMarker = {
      coordinate: event.nativeEvent.coordinate,
      key: Math.random().toString(),
    };
    setMarkers([...markers, newMarker]);
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} onPress={handlePress}>
        {markers.map((marker) => (
          <Marker key={marker.key} coordinate={marker.coordinate} />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
