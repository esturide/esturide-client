import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GenericModal } from '@components/modals/GenericModal';
import { stringToInteger } from '@libs/cast';
import { showMessage } from '@libs/alerts/toast';
import CardSeat from '@components/cards/CardSeat';
import { useTravelScheduleRoute } from '@components/context/RouteNavigatorContext';

import InputTime from '@components/inputs/InputTime';
import CancelButton from '@components/buttons/CancelButton';
import InputLabel from '@components/inputs/InputLabel';
import GreenButton from '@components/buttons/GreenButton';
import { useUserManagerContext } from '@components/context/UserManagerContext';
import InputPrice from '@components/inputs/InputPrice';
import InputSeats from '@components/inputs/InputSeats';

export default function ScheduleTravel() {
  const { setOnTraveling } = useUserManagerContext();
  const { currentRoute, setCurrentRoute } = useTravelScheduleRoute();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const [finishedTime, setFinishedTime] = useState(new Date());
  const [travelPrice, setTravelPrice] = useState(0);

  const showDatePicker = async () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  const travelConfirm = async () => {
    if (travelPrice > 0) {
      console.log(`Travel price: ${travelPrice}`);

      setCurrentRoute('/user/maps/driver/waiting-passengers');
      setOnTraveling(true);
    } else {
      showMessage('Los viajes deben tener un precio.');
    }
  };

  const travelDestinationSelect = async () => {
    setCurrentRoute('/user/maps/driver/select-destination');
  };

  const cancelSchedule = async () => {
    setCurrentRoute('/user/maps/');
  };

  return (
    <GenericModal
      title={'Agendar viaje'}
      onClose={cancelSchedule}
      visible={true}
    >
      <View style={styles.container}>
        <View style={styles.containerRow}>
          <InputTime label={'Inicio'} />
          <InputTime label={'Terminar'} />
        </View>

        <View style={styles.containerRow}>
          <InputPrice setPrice={setTravelPrice} />

          <InputSeats />
        </View>

        <View style={styles.containerColumns}>
          <View style={styles.containerRow}>
            <GreenButton title={'Confirmar'} onPress={travelConfirm} />
            <GreenButton title={'Destino'} onPress={travelDestinationSelect} />
          </View>
          <View style={styles.containerRow}>
            <CancelButton title={'Cancelar'} onPress={cancelSchedule} />
          </View>
        </View>
      </View>
    </GenericModal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    alignItems: 'center',
    gap: 10,
  },
  containerColumns: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
