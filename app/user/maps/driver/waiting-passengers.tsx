import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  showFailureMessage,
  showLongSuccessMessage,
} from '@libs/toast/message/messages';
import { useRouteNavigator } from '@components/context/RouteNavigatorContext';
import AdBanner from '@components/banners/AdBanner';
import Loading from '@components/visuals/resources/Loading';
import UserMapViewer from '@components/cards/maps/UserMapViewer';
import BottomSheet from '@components/modals/sheets/BottomSheet';
import CardTravel, { ArrayPassengers } from '@components/cards/CardTravel';
import { useUserPosition } from '@components/context/UserCurrentLocation';
import { useUserManagerContext } from '@components/context/UserManagerContext';
import GreenButton from '@components/buttons/GreenButton';
import CompactGreenButton from '@components/buttons/compact/CompactGreenButton';
import CompactCancelButton from '@components/buttons/compact/CompactCancelButton';
import { useDriverContext } from '@components/context/DriverContext';
import { requestCurrentUUIDScheduleTravel } from '@libs/request/travels/requestCurrentTravel';
import {
  changeStatusTravel,
  StatusMode,
} from '@libs/request/travels/changeStatusTravel';
import loaderEffect from '@libs/loaderEffect';
import { TravelCardStatus } from '@components/cards/travel/TravelCardStatus';

export default function WaitingPassengers() {
  const { location } = useUserPosition();
  const { setOnTraveling } = useUserManagerContext();
  const { isLoading } = useUserPosition();
  const { setCurrentRoute } = useRouteNavigator();
  const {
    travelRequestForm,
    travelData,
    travelDataIsLoad,
    setStartTime,
    setFinishedTime,
    setTravelPrice,
    setDestinationEstablished,
    setDestination,
    addSeats,
  } = useDriverContext();
  const [changePage, setChangePage] = useState(true);
  const [loading, setLoading] = useState(false);
  const [seats, setSeats] = useState<ArrayPassengers[]>([]);

  useEffect(() => {
    if (travelData !== undefined) {
      setStartTime(travelData.starting);
      setFinishedTime(travelData.finished);
      setTravelPrice(travelData.price);
      setDestinationEstablished(true);
      setDestination(travelData.destination);

      for (const seat of travelData.seats) {
        addSeats(seat);
      }
    }
  }, [travelDataIsLoad]);

  useEffect(() => {
    const allSeats: ArrayPassengers[] = [];

    travelRequestForm.seats.forEach((seat: string) => {
      allSeats.push({
        value: seat,
      });
    });

    setSeats(allSeats);
  }, [travelRequestForm.seats]);

  const loadingChangeStatus = async (mode: StatusMode, uuid: string) => {
    let status = false;

    await loaderEffect(async () => {
      status = await changeStatusTravel(mode, uuid);
    }, setLoading);

    return status;
  };

  const travelIsOver = async () => {
    setCurrentRoute('/user/maps');
    setOnTraveling(false);
  };

  const finishTravel = async () => {
    const uuid = await requestCurrentUUIDScheduleTravel();

    if (uuid === '') {
      await travelIsOver();
    }

    const status = await loadingChangeStatus('finished', uuid);

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

    const status = await loadingChangeStatus('cancel', uuid);

    if (status) {
      await travelIsOver();
      showFailureMessage('Viaje cancelado.');
    }
  };

  const onChangePage = async () => {
    setChangePage(!changePage);
  };

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
        {viewPassengers ? (
          <Passengers />
        ) : (
          <TravelCardStatus
            price={travelData.price}
            starting={travelData.starting}
            finished={travelData.finished}
            seats={seats}
          />
        )}

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

  if (loading || isLoading || !travelDataIsLoad) {
    return <Loading visible={true} />;
  }

  return (
    <>
      <View style={styles.container}>
        <UserMapViewer location={location} />

        <BottomSheet>
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
