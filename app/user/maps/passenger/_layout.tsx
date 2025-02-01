import React from 'react';
import { router, Slot } from 'expo-router';
import { useUserTypeContext } from '@components/context/UserTypeContext';

export default function LayoutPassenger() {
  const { userType } = useUserTypeContext();

  if (userType === 'driver') {
    return (
      <>
        <Slot />
      </>
    );
  } else {
    router.push('/user/maps/');
  }
}
