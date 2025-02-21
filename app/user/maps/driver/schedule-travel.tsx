import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { GenericModal } from '@components/modals/GenericModal';
import { showMessage } from '@libs/alerts/toast';
import { useTravelScheduleRoute } from '@components/context/RouteNavigatorContext';

import InputTime from '@components/inputs/InputTime';
import CancelButton from '@components/buttons/CancelButton';
import GreenButton from '@components/buttons/GreenButton';
import InputPrice from '@components/inputs/InputPrice';
import InputSeats from '@components/inputs/InputSeats';
import CardButton from '@components/buttons/cards/CardButton';
import AuthUser from '@components/forms/AuthUser';
import Loading from '@components/visuals/resources/Loading';
import { useUserManagerContext } from '@components/context/UserManagerContext';
import { useUserPosition } from '@components/context/UserCurrentLocation';
import { showFailureMessage } from '@libs/toast/messages';
import loaderEffect from '@libs/loaderEffect';
import { requestScheduleTravel } from '@libs/request/requestScheduleTravel';

export default function ScheduleTravel() {
  const { location, isLoading } = useUserPosition();
  const [loadingRequest, setLoadingRequest] = useState(false);
  const { setOnTraveling } = useUserManagerContext();
  const {
    travelRequestForm,
    setCurrentRoute,
    setStartTime,
    setFinishedTime,
    setTravelPrice,
    setDestinationEstablished,
    setTravelCanStart,
    setValidateTravel,
    validTravel,
  } = useTravelScheduleRoute();

  const travelConfirm = async () => {
    let status = false;

    console.log(location);
    console.log(travelRequestForm);

    await loaderEffect(async () => {
      status = await requestScheduleTravel(
        location,
        travelRequestForm.destination,
        travelRequestForm.travelPrice,
        4,
      );
    }, setLoadingRequest);

    setOnTraveling(status);
    setTravelCanStart(status);

    if (status) {
      showMessage('Viaje iniciado correctamente.');
      setCurrentRoute('/user/maps/driver/waiting-passengers');
    } else {
      showFailureMessage('Error en tu solicitud.');
    }
  };

  const travelDestinationSelect = async () => {
    setDestinationEstablished(true);
    setCurrentRoute('/user/maps/driver/select-destination');
  };

  const cancelSchedule = async () => {
    setCurrentRoute('/user/maps/');
  };

  const authTravel = async (validate: boolean) => {
    setValidateTravel(validate);

    if (validate) {
      showMessage('Viaje validado correctamente.');
    } else {
      showFailureMessage('Error al validar viaje.');
    }
  };

  return (
    <>
      <GenericModal
        title={'Agendar viaje'}
        onClose={cancelSchedule}
        visible={true}
      >
        <View style={styles.containerForm}>
          <View style={styles.containerRow}>
            <InputTime
              label={'Inicio'}
              setTime={setStartTime}
              value={travelRequestForm.startTime}
            />
            <InputTime
              label={'Terminar'}
              setTime={setFinishedTime}
              value={travelRequestForm.finishedTime}
            />
          </View>

          <View style={styles.containerRow}>
            <InputPrice
              label={'Precio'}
              setPrice={setTravelPrice}
              price={travelRequestForm.travelPrice}
            />
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
                disabled={validTravel}
              />
            </View>

            <View style={styles.containerRow}>
              <CancelButton title={'Cancelar'} onPress={cancelSchedule} />
            </View>
          </View>
        </View>
      </GenericModal>
      <Loading visible={loadingRequest || isLoading} modal />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerForm: {
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
