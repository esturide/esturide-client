import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { showFailureMessage, showSuccessMessage } from '@libs/toast/messages';
import { InputButton } from '@components/buttons/InputButton';
import AdBanner from '@components/banners/AdBanner';
import CardTravel, { SeatsArr } from '@components/cards/CardTravel';
import BottomSheet from '@components/modals/sheets/BottomSheet';
import { useTravelScheduleRoute } from '@components/context/RouteNavigatorContext';
import { useCurrentPosition } from '@components/context/LocationContext';
import AbsoluteTopLayout from '@components/layouts/AbsoluteTopLayout';

export default function WaitingPassengers() {
  const location = useCurrentPosition();
  const { currentRoute, setCurrentRoute } = useTravelScheduleRoute();
  const [visible, setVisible] = useState(false);

  const ShowMap = () => {
    return (
      <>
        <View style={styles.container}>
          <AbsoluteTopLayout>
            <AdBanner />
            <View style={styles.container}>
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
          </AbsoluteTopLayout>

          <MapView
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.0021,
              longitudeDelta: 0.0021,
            }}
            style={styles.maps}
            scrollEnabled={false}
          >
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title={'Conductor'}
              description={'Origen'}
            >
              <Image
                source={require('@assets/markers/driver.png')}
                style={styles.marker}
              ></Image>
            </Marker>
          </MapView>
        </View>
      </>
    );
  };

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

  return <ShowMap />;
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
