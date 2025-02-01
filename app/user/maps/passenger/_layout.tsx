import React from 'react';
import { router, Slot } from 'expo-router';
import { useUserManagerContext } from '@components/context/UserManagerContext';

export default function LayoutPassenger() {
  const { userType } = useUserManagerContext();

  if (userType === 'Passenger') {
    return (
      <>
        <Slot />
      </>
    );
  } else {
    router.push('/user/maps/');
  }
}
