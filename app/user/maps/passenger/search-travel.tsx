import AdBanner from '@components/banners/AdBanner';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function SearchTravel() {
  return (
    <>
      <AdBanner />
      <View style={styles.container}>
        <Text>Buscar viajes</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  message: {
    flexGrow: 1,
    alignContent: 'center',
    alignSelf: 'center',
  },
  messageText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  controls: {
    flexDirection: 'row-reverse',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
