import React from 'react';
import { Slot } from 'expo-router';
import { Provider } from 'jotai';

import 'react-native-reanimated';
import Toast from 'react-native-toast-message';
import RouteNavigatorContext from '@components/context/RouteNavigatorContext';
import UserManagerContextProvider from '@components/context/UserManagerContext';

export default function RootLayout() {
  return (
    <>
      <Provider>
        <UserManagerContextProvider>
          <RouteNavigatorContext>
            <Slot />
            <Toast />
          </RouteNavigatorContext>
        </UserManagerContextProvider>
      </Provider>
    </>
  );
}
