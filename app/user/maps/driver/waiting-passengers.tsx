import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  showFailureMessage,
  showLongSuccessMessage,
} from '@libs/toast/messages';
import { useTravelScheduleRoute } from '@components/context/RouteNavigatorContext';
import AdBanner from '@components/banners/AdBanner';
import Loading from '@components/visuals/resources/Loading';
import UserMapViewer from '@components/cards/maps/UserMapViewer';
import BottomSheet from '@components/modals/sheets/BottomSheet';
import CardTravel, { SeatsArr } from '@components/cards/CardTravel';
import { useUserPosition } from '@components/context/UserCurrentLocation';
import { useUserManagerContext } from '@components/context/UserManagerContext';
import GreenButton from '@components/buttons/GreenButton';
import CompactGreenButton from '@components/buttons/compact/CompactGreenButton';
import CompactCancelButton from '@components/buttons/compact/CompactCancelButton';
import {
  requestCurrentScheduleTravel,
  requestCurrentUUIDScheduleTravel,
} from '@libs/request/requestCurrentTravel';
import { changeStatusTravel } from '@libs/request/changeStatusTravel';

const formatDate = (date: Date): string => {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
};
export default function WaitingPassengers() {
  const { location } = useUserPosition();
  const { setOnTraveling } = useUserManagerContext();
  const { setRefresh, isLoading } = useUserPosition();
  const { setCurrentRoute } = useTravelScheduleRoute();
  const [changePage, setChangePage] = useState(true);

  const { travelRequestForm } = useTravelScheduleRoute();

  useEffect(() => {
    setRefresh(true);
  }, []);

  const travelIsOver = async () => {
    setCurrentRoute('/user/maps');
    setOnTraveling(false);
  };

  const finishTravel = async () => {
    const uuid = await requestCurrentUUIDScheduleTravel();

    if (uuid === '') {
      await travelIsOver();
    }

    const status = await changeStatusTravel('finished', uuid);

    if (status) {
      await travelIsOver();
      showLongSuccessMessage(
        'Viaje finalizado.',
        'Que hayas disfrutado del viaje',
      );
    }
  };

  const cancelTravel = async () => {
    const uuid = await requestCurrentUUIDScheduleTravel();

    if (uuid === '') {
      await travelIsOver();
    }

    const status = await changeStatusTravel('cancel', uuid);

    if (status) {
      await travelIsOver();
      showFailureMessage('Viaje cancelado.');
    }
  };

  const onChangePage = async () => {
    setChangePage(!changePage);
  };

  const seats: SeatsArr[] = [{ value: '1' }];

  const StatusTravel = () => {
    const [viewPassengers, setViewPassengers] = useState(false);

    const onChangeView = async () => {
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
            departTime={formatDate(travelRequestForm.startTime)}
            arrivalTime={formatDate(travelRequestForm.finishedTime)}
            price={travelRequestForm.travelPrice}
            seatsArr={seats}
          />
        </View>
      );
    };

    const ButtonControls = () => {
      return (
        <View style={styles.containerButtons}>
          {viewPassengers ? (
            <GreenButton title={'Monitoreo'} onPress={onChangeView} />
          ) : (
            <GreenButton title={'Pasajeros'} onPress={onChangeView} />
          )}
          <GreenButton title={'Terminar'} onPress={onChangePage} />
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
        <UserMapViewer location={location} />

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
    justifyContent: 'space-around',
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
