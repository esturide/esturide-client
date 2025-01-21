import React from 'react';
import { Slot } from 'expo-router';
import { Provider } from 'jotai';

import 'react-native-reanimated';
import Toast from 'react-native-toast-message';

export default function RootLayout() {
  return (
    <>
      <Provider>
        <Slot />
      </Provider>
      <Toast />
    </>
  );
}
