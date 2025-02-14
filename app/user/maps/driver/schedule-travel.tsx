import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { GenericModal } from '@components/modals/GenericModal';
import { showMessage } from '@libs/alerts/toast';
import { useTravelScheduleRoute } from '@components/context/RouteNavigatorContext';

import InputTime from '@components/inputs/InputTime';
import CancelButton from '@components/buttons/CancelButton';
import GreenButton from '@components/buttons/GreenButton';
import { useUserManagerContext } from '@components/context/UserManagerContext';
import InputPrice from '@components/inputs/InputPrice';
import InputSeats from '@components/inputs/InputSeats';
import CompactGreenButton from '@components/buttons/compact/CompactGreenButton';
import CardItemPresentation from '@components/cards/item/CardItemPresentation';
import CardButton from '@components/buttons/cards/CardButton';
import { SearchBar } from '@components/cards/SearchBar';
import AuthUser from '@components/forms/AuthUser';

export default function ScheduleTravel() {
  const { setOnTraveling } = useUserManagerContext();
  const { currentRoute, setCurrentRoute } = useTravelScheduleRoute();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const [finishedTime, setFinishedTime] = useState(new Date());
  const [travelPrice, setTravelPrice] = useState(0);
  const [travelCanStart, settravelCanStart] = useState(false);
  const [validateTravel, setValidateTravel] = useState(false);

  useEffect(() => {
    if (travelPrice > 0) {
      settravelCanStart(true);
    } else {
      settravelCanStart(false);
    }
  }, [travelPrice]);

  const travelConfirm = async () => {
    if (travelPrice > 0) {
      console.log(`Travel price: ${travelPrice}`);

      setCurrentRoute('/user/maps/driver/waiting-passengers');
      setOnTraveling(true);
      settravelCanStart(true);
    } else {
      showMessage('Los viajes deben tener un precio.');
      settravelCanStart(false);
    }
  };

  const travelDestinationSelect = async () => {
    setCurrentRoute('/user/maps/driver/select-destination');
  };

  const cancelSchedule = async () => {
    setCurrentRoute('/user/maps/');
  };

  const authTravel = async (validate: boolean) => {
    setValidateTravel(true);
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
          <InputPrice label={'Precio'} setPrice={setTravelPrice} />
        </View>

        <View style={styles.containerRow}>
          <InputSeats />

          <CardButton
            title={'Destino'}
            label={'Establecer'}
            onPress={travelDestinationSelect}
            scheme={'green'}
          />
        </View>
        <View style={styles.containerColumns}>
          <View style={styles.containerRow}>
            <AuthUser label={'Validar viaje'} onValidate={authTravel} />
          </View>

          <View style={styles.containerRow}>
            <GreenButton
              title={'Confirmar'}
              onPress={travelConfirm}
              disabled={!(travelCanStart && validateTravel)}
            />
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
    gap: 5,
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    alignItems: 'center',
    gap: 17,
  },
  containerColumns: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    alignItems: 'center',
    gap: 17,
  },
});
