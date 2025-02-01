import React from 'react';
import { router, Slot } from 'expo-router';
import { useUserTypeContext } from '@components/context/UserTypeContext';

export default function LayoutDriver() {
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
