import React from 'react';
import { LatLng, Marker } from 'react-native-maps';
import { Image } from 'react-native';

import DestinationMarker from '@assets/markers/destination.png';
import DriverMarker from '@assets/markers/driver.png';
import PassengerMarker from '@assets/markers/passenger.png';

export type TypeMarker = 'destination' | 'driver' | 'passenger';

type MarkerProps = {
  description?: string;
  coordinates: LatLng;
  type: TypeMarker;
};

const MapMarker = ({ coordinates, description = '', type }: MarkerProps) => {
  const markers = {
    destination: DestinationMarker,
    driver: DriverMarker,
    passenger: PassengerMarker,
  };

  return (
    <Marker coordinate={coordinates} description={description}>
      <Image source={markers[type]} style={{ height: 35, width: 35 }} />
    </Marker>
  );
};

export default MapMarker;
