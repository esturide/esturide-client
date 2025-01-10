import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import { Position } from '@components/cards/Map';
import loaderEffect from '@libs/loaderEffect';
import { showFailureMessage } from '@libs/toast/messages';
import { InputButton } from '@components/buttons/InputButton';
import Passengers, { Seat } from '@components/cards/passangers/Passengers';
import RequestProfile from '@const/RequestProfile';
import AdBanner from '@components/banners/AdBanner';
import { router } from 'expo-router';

import * as Crypto from 'expo-crypto';

interface PassengerProfile extends RequestProfile {
  seat: Seat;
}

export default function WaitingPassengers() {
  const [location, setLocation] = useState<Position | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      await loaderEffect(async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
          showFailureMessage('No se pudo acceder a la ubicacion.');
        }

        const locationObject = await Location.getCurrentPositionAsync({});

        setLocation({
          latitude: locationObject.coords.latitude,
          longitude: locationObject.coords.longitude,
        });
      }, setLoading);
    })();
  }, []);

  const finishTravel = async () => {
    router.push('/user/maps');
  };

  const profiles: PassengerProfile[] = [
    {
      seat: 'A',
      firstName: 'Diego',
      paternalSurname: 'Valderrama',
      maternalSurname: 'Garcia',
      userCode: 10222,
      role: 'student',
      email: 'a@mail.com',
    },
    {
      seat: 'B',
      firstName: 'Guillermo',
      paternalSurname: 'Obregon',
      maternalSurname: 'Garcia',
      userCode: 10223,
      role: 'student',
      email: 'b@mail.com',
    },
  ];

  return (
    <>
      <AdBanner />
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Text style={styles.title}>Lista de pasajeros</Text>
        </View>

        <View style={styles.containerPassengers}>
          <Text style={styles.title}>Lista de pasajeros</Text>
          <View style={styles.passengerList}>
            {profiles.map((profile) => (
              <View key={Crypto.randomUUID()}>
                <Passengers seat={profile.seat} profile={profile} />
              </View>
            ))}
          </View>
        </View>

        <View style={styles.containerButtons}>
          <InputButton
            typeButton={'depositBlue'}
            label={'Terminar viaje'}
            onPress={finishTravel}
          />
          <InputButton
            typeButton={'depositGreen'}
            label={'Cancelar'}
            onPress={finishTravel}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
    margin: 15,
  },
  containerPassengers: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e4e4e4',
    padding: 15,
    gap: 15,
  },
  title: {
    fontWeight: 'bold',
  },
  cardContainer: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e4e4e4',
    padding: 5,
  },
  passengerList: {
    gap: 15,
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 15,
  },
});
