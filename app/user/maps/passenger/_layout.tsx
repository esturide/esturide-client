import React from 'react';
import { router, Slot } from 'expo-router';
import { useUserManagerContext } from '@components/context/UserManagerContext';
import PassengerContextProvider from '@components/context/PassengerContext';

export default function LayoutPassenger() {
  const { userType } = useUserManagerContext();

  if (userType === 'Passenger') {
    return (
      <>
        <PassengerContextProvider>
          <Slot />
        </PassengerContextProvider>
      </>
    );
  } else {
    router.push('/user/maps/');
  }
}
