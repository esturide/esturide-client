import React from "react";
import { View, StyleSheet, DimensionValue } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { StatusBar } from "expo-status-bar";

interface MapProps {
  mapSize: { height: DimensionValue; width: DimensionValue };
  origin: { latitude: number; longitude: number } | null;
  destination: { latitude: number; longitude: number } | null;
}

export default function Map({
  mapSize = { height: "100%", width: "100%" },
  origin = null,
  destination = null,
}: MapProps) {
  const initialCoords = origin
    ? origin
    : { latitude: 20.56651, longitude: -103.22825 };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <MapView
        initialRegion={{
          latitude: initialCoords.latitude,
          longitude: initialCoords.longitude,
          latitudeDelta: 0.0921,
          longitudeDelta: 0.0421,
        }}
        style={mapSize}
      >
        {origin && (
          <Marker
            coordinate={{
              latitude: origin.latitude,
              longitude: origin.longitude,
            }}
            description="Origen"
          ></Marker>
        )}
        {destination && (
          <Marker
            coordinate={{
              latitude: destination.latitude,
              longitude: destination.longitude,
            }}
            description="Destino"
          ></Marker>
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
  durationContainer: {
    backgroundColor: "blue",
    padding: 5,
    borderRadius: 5,
  },
  durationText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});
