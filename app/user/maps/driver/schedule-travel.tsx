import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { GenericModal } from '@components/modals/GenericModal';
import InputTime, { Time } from '@components/inputs/InputTime';
import { InputButton } from '@components/buttons/InputButton';
import InputLabel from '@components/inputs/InputLabel';
import { router } from 'expo-router';
import { stringToInteger } from '@libs/cast';
import { showMessage } from '@libs/alerts/toast';
import CardSeat from '@components/cards/CardSeat';
import { useTravelScheduleRoute } from '@components/context/RouteNavigatorContext';

export default function ScheduleTravel() {
  const { currentRoute, setCurrentRoute } = useTravelScheduleRoute();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const [finishedTime, setFinishedTime] = useState(new Date());
  const [travelPrice, setTravelPrice] = useState('');

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
    try {
      const price = stringToInteger(travelPrice);

      if (price > 0) {
        setCurrentRoute('/user/maps/driver/waiting-passengers');
      } else {
        showMessage('Los viajes deben tener un precio.');
      }
    } catch (e) {
      return;
    }
  };

  const travelDestinationSelect = async () => {
    // router.push('/user/maps/driver/select-destination');
    setCurrentRoute('/user/maps/driver/select-destination');
  };

  const setPrice = (value) => {
    try {
      setTravelPrice(value);
    } catch (e) {
      // TO DO
    }
  };

  return (
    <GenericModal title={'Agendar viaje'} isVisible>
      <View style={styles.container}>
        <View style={styles.inputs}>
          <InputTime label={'Inicio'} />
          <InputTime label={'Terminar'} />
        </View>

        <View style={styles.containerSeats}>
          <Text>Asientos disponibles</Text>
          <View style={styles.seats}>
            <CardSeat seat={'A'} />
            <CardSeat seat={'B'} />
            <CardSeat seat={'C'} />
          </View>
        </View>

        <InputLabel
          label={'Precio'}
          onChangeText={setPrice}
          value={`${travelPrice}`}
          typeInput={'numeric'}
        />

        <InputButton
          typeButton={'submit'}
          label={'Confirmar'}
          onPress={travelConfirm}
        />

        <InputButton
          typeButton={'submit'}
          label={'Destino'}
          onPress={travelDestinationSelect}
        />
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

  inputs: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },

  containerSeats: {
    flex: 1,
  },

  seats: {
    flexDirection: 'row',
    gap: 15,
    margin: 5,
  },
});
