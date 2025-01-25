import React from 'react';
import { Slot } from 'expo-router';
import { Provider } from 'jotai';

import 'react-native-reanimated';
import Toast from 'react-native-toast-message';
import RouteNavigatorContext from '@components/context/RouteNavigatorContext';
import UserTypeContextProvider from '@components/context/UserTypeContext';

export default function RootLayout() {
  return (
    <>
      <UserTypeContextProvider>
        <RouteNavigatorContext>
          <Provider>
            <Slot />
          </Provider>
          <Toast />
        </RouteNavigatorContext>
      </UserTypeContextProvider>
    </>
  );
}
