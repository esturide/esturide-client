import React from 'react';
import { router, Slot } from 'expo-router';
import { useUserManagerContext } from '@components/context/UserManagerContext';
import DriverContextProvider from '@components/context/DriverContext';

export default function LayoutDriver() {
  const { userType } = useUserManagerContext();

  if (userType === 'Driver') {
    return (
      <>
        <DriverContextProvider>
          <Slot />
        </DriverContextProvider>
      </>
    );
  } else {
    router.push('/user/maps/');
  }
}
