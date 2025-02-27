import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SearchBar } from '@components/cards/SearchBar';
import AdBanner from '@components/banners/AdBanner';
import BlueButton from '@components/buttons/BlueButton';
import CompactBlueButton from '@components/buttons/compact/CompactBlueButton';
import Loading from '@components/visuals/resources/Loading';
import MapCard from '@components/cards/maps/MapCard';
import { requestAllTravel } from '@libs/request/travels/requestAllTravels';
import loaderEffect from '@libs/loaderEffect';
import { Travel } from '@const/Travels';
import { getFullName } from '@const/RequestProfile';
import { defaultPassengerColor } from '@const/DefaultColors';
import * as Crypto from 'expo-crypto';
import * as Location from 'expo-location';
import { showFailureMessage } from '@libs/toast/message/messages';
import { Position } from '@const/Position';

export default function SearchTravel() {
  const [reloading, setReloading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [travels, setTravels] = useState<Travel[]>([]);
  const [location, setLocation] = useState<Position>({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    const updateLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        showFailureMessage('The location could not be accessed.');
      }

      const locationObject = await Location.getCurrentPositionAsync({});

      setLocation({
        latitude: locationObject.coords.latitude,
        longitude: locationObject.coords.longitude,
      });

      setLoadingLocation(false);
    };

    updateLocation();
  }, []);

  useEffect(() => {
    const queryAllTravels = async () => {
      await loaderEffect(async () => {
        const data = await requestAllTravel();

        console.log(JSON.stringify(data));

        setTravels(data);
        setReloading(false);
      }, setLoadingData);
    };

    queryAllTravels();
  }, [reloading]);

  const CardTravel = ({ travel }: { travel: Travel }) => {
    const driver = travel.driver;

    return (
      <View style={styles.travelCard}>
        <Text>{getFullName(driver)}</Text>
        <Text>Hora de Salida: 5:45pm</Text>
        <MapCard
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          origin={travel.origin}
          destination={travel.destination}
        />
        <CompactBlueButton title={'Solicitar'} />
      </View>
    );
  };

  const AllTravels = () => {
    return (
      <>
        <ScrollView>
          {travels.map((travel) => (
            <CardTravel travel={travel} key={Crypto.randomUUID()} />
          ))}
        </ScrollView>
      </>
    );
  };

  return (
    <>
      <AdBanner />

      <View style={styles.container}>
        <View style={styles.controls}>
          <SearchBar />
        </View>

        <View style={styles.travelList}>
          {loadingData ? (
            <Loading visible={true} modal={false} />
          ) : (
            <AllTravels />
          )}
        </View>

        <View style={styles.controls}>
          <BlueButton
            title={'Actualizar'}
            onPress={async () => {
              setReloading(true);
            }}
          />

          <BlueButton title={'Filtrar'} />
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
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  travelList: {
    flex: 1,
    gap: 5,
    flexDirection: 'column',
  },
  travelCard: {
    gap: 15,
    margin: 5,
    padding: 15,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: defaultPassengerColor,
  },
});
