import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { GenericModal } from '@components/modals/GenericModal';
import InputTime from '@components/inputs/InputTime';
import { InputButton } from '@components/buttons/InputButton';
import InputLabel from '@components/inputs/InputLabel';
import { router } from 'expo-router';

export default function ScheduleRides() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const [finishedTime, setFinishedTime] = useState(new Date());

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
    router.replace('/user/maps/driver/waiting-travel');
  };

  return (
    <GenericModal title={'Agendar viaje'} isVisible>
      <View style={styles.container}>
        <View style={styles.inputs}>
          <InputTime label={'Inicio'} />
          <InputTime label={'Terminar'} />
        </View>
        <InputLabel
          label={'Precio'}
          onChangeText={(price) => console.log(price)}
          typeInput={'numeric'}
          floatLabel
        />
        <InputButton
          typeButton={'submit'}
          label={'Iniciar viaje'}
          onPress={travelConfirm}
        />
      </View>
    </GenericModal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  inputs: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },
});
