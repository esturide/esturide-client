import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import { Position } from '@components/cards/Map';
import loaderEffect from '@libs/loaderEffect';
import { showFailureMessage } from '@libs/toast/messages';
import Passengers from '@components/cards/passangers/Passengers';
import RequestProfile from '@const/RequestProfile';
import AdBanner from '@components/banners/AdBanner';
import { InputButton } from '@components/buttons/InputButton';

export default function WaitingPassengers() {
  // 20.566719562492036, -103.22854245481798
  const [location, setLocation] = useState<Position | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      await loaderEffect(async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
          showFailureMessage('No se pudo acceder a la ubicacion.');
        }

        let locationObject = await Location.getCurrentPositionAsync({});

        setLocation({
          latitude: locationObject.coords.latitude,
          longitude: locationObject.coords.longitude,
        });
      }, setLoading);
    })();
  }, []);

  const profile: RequestProfile = {
    firstName: 'Diego',
    paternalSurname: 'Valderrama',
    maternalSurname: 'Garcia',
    userCode: 10222,
    role: 'student',
    email: 'a@mail.com',
  };

  return (
    <>
      <AdBanner />
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Lista de pasajeros</Text>
        </View>

        <View style={styles.containerPassengers}>
          <Passengers seat={'A'} profile={profile} />
          <Passengers seat={'B'} profile={profile} />
        </View>

        <View>
          <InputButton typeButton={'submit'} label={'Iniciar viaje'} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 15,
  },
  containerPassengers: {
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 11,
    margin: 25,
    padding: 5,
    gap: 15,
  },
  title: {
    fontWeight: 'bold',
  },
  buttons: {},
});
