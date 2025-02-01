import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { showFailureMessage, showSuccessMessage } from '@libs/toast/messages';
import { InputButton } from '@components/buttons/InputButton';
import { useTravelScheduleRoute } from '@components/context/RouteNavigatorContext';
import AdBanner from '@components/banners/AdBanner';
import CardTravel, { SeatsArr } from '@components/cards/CardTravel';
import BottomSheetModal from '@components/modals/sheets/BottomSheetModal';
import AbsoluteTopLayout from '@components/layouts/AbsoluteTopLayout';
import Loading from '@components/visuals/resources/Loading';
import { useUserPosition } from '@components/context/UserCurrentLocation';
import UserMapViewer from '@components/cards/maps/UserMapViewer';
import BottomSheet from '@components/modals/sheets/BottomSheet';
import BlueButton from '@components/buttons/BlueButton';
import CancelButton from '@components/buttons/CancelButton';
import CompactBlueButton from '@components/buttons/compact/CompactBlueButton';
import CompactGreenButton from '@components/buttons/compact/CompactGreenButton';
import GreenButton from '@components/buttons/GreenButton';
import CompactCancelButton from '@components/buttons/compact/CompactCancelButton';

export default function WaitingPassengers() {
  const { setRefresh, location, isLoading } = useUserPosition();
  const { setCurrentRoute } = useTravelScheduleRoute();
  const [visible, setVisible] = useState(true);

  const finishTravel = async () => {
    setCurrentRoute('/user/maps');
    showSuccessMessage('Viaje finalizado.', 'Que hayas disfrutado del viaje');
  };

  const cancelTravel = async () => {
    setCurrentRoute('/user/maps');
    showFailureMessage('Viaje cancelado.');
  };

  const onChangePage = async () => {
    setVisible(!visible);
  };

  const seats: SeatsArr[] = [{ value: '1' }];

  const StatusTravel = () => {
    return (
      <View>
        <View style={styles.containerPassengers}>
          <CardTravel
            typeCard={'driver'}
            departTime={'1'}
            arrivalTime={'1'}
            price={1}
            seatsArr={seats}
          />
        </View>
        <View style={styles.containerButtons}>
          <CompactGreenButton title={'Opciones'} onPress={onChangePage} />
        </View>
      </View>
    );
  };

  const ControlTravel = () => {
    return (
      <View>
        <View style={styles.containerButtons}>
          <CompactGreenButton title={'Atras'} onPress={onChangePage} />
          <CompactGreenButton title={'Terminar'} onPress={finishTravel} />
          <CompactCancelButton title={'Cancelar'} onPress={cancelTravel} />
        </View>
      </View>
    );
  };

  if (isLoading) {
    return <Loading visible={true} />;
  }

  return (
    <>
      <View style={styles.container}>
        <UserMapViewer />

        <BottomSheet>
          <AdBanner />

          <View style={styles.container}>
            {visible ? <StatusTravel /> : <ControlTravel />}
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
