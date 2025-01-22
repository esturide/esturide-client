import React from 'react';
import { Slot } from 'expo-router';
import { Provider } from 'jotai';

import 'react-native-reanimated';
import Toast from 'react-native-toast-message';
import RouteNavigatorContext from '@components/context/RouteNavigatorContext';

export default function RootLayout() {
  return (
    <>
      <RouteNavigatorContext>
        <Provider>
          <Slot />
        </Provider>
        <Toast />
      </RouteNavigatorContext>
    </>
  );
}
