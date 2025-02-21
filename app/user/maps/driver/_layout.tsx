import React from 'react';
import { router, Slot } from 'expo-router';
import { useUserManagerContext } from '@components/context/UserManagerContext';

export default function LayoutDriver() {
  const { userType } = useUserManagerContext();

  if (userType === 'Driver') {
    return (
      <>
        <Slot />
      </>
    );
  } else {
    router.push('/user/maps/');
  }
}
