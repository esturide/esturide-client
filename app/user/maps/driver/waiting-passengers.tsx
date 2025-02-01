import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { showFailureMessage, showSuccessMessage } from '@libs/toast/messages';
import { useTravelScheduleRoute } from '@components/context/RouteNavigatorContext';
import AdBanner from '@components/banners/AdBanner';
import Loading from '@components/visuals/resources/Loading';
import UserMapViewer from '@components/cards/maps/UserMapViewer';
import BottomSheet from '@components/modals/sheets/BottomSheet';
import CompactGreenButton from '@components/buttons/compact/CompactGreenButton';
import CompactCancelButton from '@components/buttons/compact/CompactCancelButton';
import CardTravel, { SeatsArr } from '@components/cards/CardTravel';
import { useUserPosition } from '@components/context/UserCurrentLocation';
import { useUserTypeContext } from '@components/context/UserTypeContext';

export default function WaitingPassengers() {
  const { setOnTraveling } = useUserTypeContext();
  const { setRefresh, location, isLoading } = useUserPosition();
  const { setCurrentRoute } = useTravelScheduleRoute();
  const [changePage, setChangePage] = useState(true);

  useEffect(() => {}, [isLoading]);

  const travelIsOver = async () => {
    setCurrentRoute('/user/maps');
    setOnTraveling(false);
  };

  const finishTravel = async () => {
    travelIsOver();
    showSuccessMessage('Viaje finalizado.', 'Que hayas disfrutado del viaje');
  };

  const cancelTravel = async () => {
    travelIsOver();
    showFailureMessage('Viaje cancelado.');
  };

  const onChangePage = async () => {
    setChangePage(!changePage);
  };

  const seats: SeatsArr[] = [{ value: '1' }];

  const StatusTravel = () => {
    const [viewPassengers, setViewPassengers] = useState(false);

    const onChangePassengers = async () => {
      setViewPassengers(!viewPassengers);
    };

    const Passengers = () => {
      return (
        <View>
          <Text>Pasajero</Text>
        </View>
      );
    };

    const TravelStatus = () => {
      return (
        <View style={styles.containerPassengers}>
          <CardTravel
            typeCard={'driver'}
            departTime={'1'}
            arrivalTime={'1'}
            price={1}
            seatsArr={seats}
          />
        </View>
      );
    };

    const ButtonControls = () => {
      return (
        <View style={styles.containerButtons}>
          <CompactGreenButton
            title={'Pasajeros'}
            onPress={onChangePassengers}
          />
          <CompactGreenButton title={'Terminar'} onPress={onChangePage} />
        </View>
      );
    };

    return (
      <>
        {viewPassengers ? <Passengers /> : <TravelStatus />}

        <ButtonControls />
      </>
    );
  };

  const ModifyTravel = () => {
    return (
      <>
        <View style={styles.containerButtons}>
          <CompactGreenButton title={'Atras'} onPress={onChangePage} />
          <CompactGreenButton title={'Finalizar'} onPress={finishTravel} />
          <CompactCancelButton title={'Cancelar'} onPress={cancelTravel} />
        </View>
      </>
    );
  };

  const onPressBottomSheet = async () => {
    console.log('Is pressed');
  };

  if (isLoading) {
    return <Loading visible={true} />;
  }

  return (
    <>
      <View style={styles.container}>
        <UserMapViewer />

        <BottomSheet onPress={onPressBottomSheet}>
          <AdBanner />

          <View style={styles.container}>
            {changePage ? <StatusTravel /> : <ModifyTravel />}
          </View>
        </BottomSheet>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerPassengers: {},
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
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 15,
  },
  maps: {
    width: '100%',
    height: '100%',
  },
  marker: {
    width: 35,
    height: 40,
  },
});
