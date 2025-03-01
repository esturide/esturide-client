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
import { showFailureMessage } from '@libs/toast/message/messages';
import { Travel } from '@const/Travels';
import { getFullName } from '@const/RequestProfile';
import { defaultPassengerColor } from '@const/DefaultColors';
import { useTravelScheduleRoute } from '@components/context/RouteNavigatorContext';
import { Position } from '@const/Position';
import * as Crypto from 'expo-crypto';
import * as Location from 'expo-location';
import { usePassengerContext } from '@components/context/PassengerContext';
import { useUserManagerContext } from '@components/context/UserManagerContext';
import {requestRide} from "@libs/request/rides/requestTravels";

export default function SearchTravel() {
  const { setOnTraveling } = useUserManagerContext();
  const { setCurrentRoute } = useTravelScheduleRoute();
  const { setTravelData, data } = usePassengerContext();
  const [reloading, setReloading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [loadingRequest, setLoadingRequest] = useState(false);
  const [showModal, setShowModal] = useState(false);
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

        setTravels(data);
        setReloading(false);
      }, setLoadingData);
    };

    queryAllTravels();
  }, [reloading]);

  const showScheduleTimes = (date: Date) => {
    return `${date.getHours()}:${date.getMinutes()}`;
  };

  type TravelProps = {
    travel: Travel;
  };

  const TravelCard = ({ travel }: TravelProps) => {
    const driver = travel.driver;
    const starting = travel.starting;
    const finished = travel.finished;

    return (
      <View>
        <Text>{getFullName(driver)}</Text>

        <View>
          <Text>Hora de Inicio: {showScheduleTimes(starting)}</Text>
          <Text>Hora de Finalizacion: {showScheduleTimes(finished)}</Text>
        </View>
      </View>
    );
  };

  const CardTravelRequest = ({ travel }: TravelProps) => {
    const requestTravel = async () => {
      let status = false;

      loaderEffect(async () => {
        status = await requestRide({
          uuid: travel.uuid,
          origin: location,
        });
      }, setLoadingRequest);

      if (status) {
        setOnTraveling(true);
        setShowModal(true);

        setTravelData('current', travel);

        setCurrentRoute('/user/maps/passenger/waiting-driver');
      }
    };

    return (
      <View style={styles.travelCard}>
        <TravelCard travel={travel} />

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

        <CompactBlueButton title={'Solicitar'} onPress={requestTravel} />
      </View>
    );
  };

  const TitleHeader = () => {
    return <Text style={styles.header}>Viajes no encontrados</Text>;
  };

  const AllTravels = () => {
    if (travels.length === 0) {
      return <TitleHeader />;
    }

    return (
      <>
        <ScrollView>
          {travels.map((travel) => (
            <CardTravelRequest travel={travel} key={Crypto.randomUUID()} />
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

      <Loading visible={loadingRequest} modal={true} />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#c3c3c3',
  },
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
