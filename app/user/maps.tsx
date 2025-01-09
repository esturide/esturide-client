import React, { StyleSheet, View } from 'react-native';
import ButtonLocationBlue from '@components/buttons/location/ButtonLocationBlue';
import Map from '@components/cards/Map';

export default function Maps() {
  return (
    <View style={styles.container}>
      <View>
        <Map
          mapSize={{
            height: 0,
            width: 0,
          }}
          origin={{
            latitude: 0,
            longitude: 0,
          }}
          destination={{
            latitude: 0,
            longitude: 0,
          }}
        />
      </View>
      <ButtonLocationBlue />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  divider: {
    width: 170,
    aspectRatio: 1,
    alignSelf: 'center',
    marginVertical: 20,
  },
  footer: {
    width: '100%',
    aspectRatio: 4.08,
    marginTop: 82,
  },
});
