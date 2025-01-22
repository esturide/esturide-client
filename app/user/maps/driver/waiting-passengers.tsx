import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { showFailureMessage, showSuccessMessage } from '@libs/toast/messages';
import { InputButton } from '@components/buttons/InputButton';
import AdBanner from '@components/banners/AdBanner';

import CardTravel, { SeatsArr } from '@components/cards/CardTravel';
import BottomSheet from '@components/modals/sheets/BottomSheet';
import { useTravelScheduleRoute } from '@components/context/RouteNavigatorContext';

export default function WaitingPassengers() {
  const { currentRoute, setCurrentRoute } = useTravelScheduleRoute();
  const [visible, setVisible] = useState(false);

  const finishTravel = async () => {
    setCurrentRoute('/user/maps');
    showSuccessMessage('Viaje finalizado.', 'Que hayas disfrutado del viaje');
  };

  const cancelTravel = async () => {
    setCurrentRoute('/user/maps');
    showFailureMessage('Viaje cancelado.');
  };

  const onPressModal = async (close: boolean) => {};

  const seats: SeatsArr[] = [{ value: '1' }];

  return (
    <>
      <AdBanner />
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Text style={styles.title}>Viajando</Text>
        </View>

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
          <InputButton
            typeButton={'depositGreen'}
            label={'Opciones'}
            onPress={async () => {
              setVisible(!visible);
            }}
          />
        </View>

        <BottomSheet
          isVisible={visible}
          onClose={setVisible}
          onPress={onPressModal}
        >
          <View style={styles.containerButtons}>
            <InputButton
              typeButton={'depositBlue'}
              label={'Terminar viaje'}
              onPress={finishTravel}
            />
            <InputButton
              typeButton={'depositGreen'}
              label={'Cancelar'}
              onPress={cancelTravel}
            />
          </View>
        </BottomSheet>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
    margin: 15,
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
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 15,
  },
});
