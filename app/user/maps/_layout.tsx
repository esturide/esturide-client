import React from 'react';
import { Slot } from 'expo-router';
import LocationContext from '@components/context/LocationContext';

export default function LayoutMap() {
  return (
    <>
      <LocationContext>
        <Slot />
      </LocationContext>
    </>
  );
}
