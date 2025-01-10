import { DimensionValue, View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export interface Position {
  readonly latitude: number;
  readonly longitude: number;
}

interface MapProps {
  mapSize?: { height: DimensionValue; width: DimensionValue };
  origin?: Position;
  destination?: Position;
}

export default function Map({ origin = null, destination = null }: MapProps) {
  const initialCoords = origin
    ? origin
    : { latitude: 20.56651, longitude: -103.22825 };

  return (
    <MapView
      initialRegion={{
        latitude: initialCoords.latitude,
        longitude: initialCoords.longitude,
        latitudeDelta: 0.0921,
        longitudeDelta: 0.0421,
      }}
      style={StyleSheet.absoluteFill}
    >
      {origin && (
        <Marker
          coordinate={{
            latitude: origin.latitude,
            longitude: origin.longitude,
          }}
          title={'Punto de origen'}
          description={'Origen'}
        ></Marker>
      )}
      {destination && (
        <Marker
          coordinate={{
            latitude: destination.latitude,
            longitude: destination.longitude,
          }}
          title={'Punto de destino'}
          description={'Destino'}
        ></Marker>
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
