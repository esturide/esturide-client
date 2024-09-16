import React from "react";
import { DimensionValue, View } from "react-native";
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
    <View>
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
