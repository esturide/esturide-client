import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import AdBanner from '@components/banners/AdBanner';
import ButtonLocationBlue from '@components/buttons/location/ButtonLocationBlue';
import { router } from 'expo-router';

export default function Index() {
  const onPress = async () => {
    router.push('/user/maps/driver/select-map');
  };

  return (
    <>
      <AdBanner />
      <View style={styles.container}>
        <View style={styles.message}>
          <Text style={styles.messageText}>
            Aun no tienes un viaje en tu lista.
          </Text>
        </View>
        <View style={styles.controls}>
          <ButtonLocationBlue onPress={onPress} />
        </View>
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
  },
});
