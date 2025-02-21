import React from 'react';
import { Slot } from 'expo-router';
import UserCurrentLocation from '@components/context/UserCurrentLocation';

export default function LayoutMap() {
  return (
    <>
      <UserCurrentLocation>
        <Slot />
      </UserCurrentLocation>
    </>
  );
}
