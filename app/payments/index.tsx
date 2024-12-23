import React from 'react';
import WebView from 'react-native-webview';
import Constants from 'expo-constants';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default function PaymentsLayout() {
  return (
    <>
      <Text>Header</Text>

      <WebView
        style={styles.container}
        originWhitelist={['*']}
        source={{ html: '<h1><center>Hello world</center></h1>' }}
      />

      <Text>Footer</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
