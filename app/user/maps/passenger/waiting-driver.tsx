import React, { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { useRouteNavigator } from '@components/context/RouteNavigatorContext';
import { useUserPosition } from '@components/context/UserCurrentLocation';
import { updateTracking } from '@libs/request/rides/updateTracking';
import { usePassengerContext } from '@components/context/PassengerContext';
import UserMapViewer from '@components/cards/maps/UserMapViewer';
import BottomSheet from '@components/modals/sheets/BottomSheet';
import CancelButton from '@components/buttons/CancelButton';
import {requestCurrentRide} from "@libs/request/rides/requestCurrentRide";

export default function WaitingDriver() {
  const { setCurrentRoute } = useRouteNavigator();
  const { location, setRefresh } = useUserPosition();

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setRefresh(true);
    }, 20000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const recordTracking = async () => {
      await requestCurrentRide(async (uuid: string) => {
        const status = await updateTracking({
          uuid: uuid,
          record: {
            latitude: location.latitude,
            longitude: location.longitude,
          },
        });
      })
    };

    recordTracking();
  }, [location]);

  const onCancel = async () => {
    setCurrentRoute('/user/maps');
  };

  return (
    <View style={styles.container}>
      <UserMapViewer location={location} />

      <BottomSheet>
        <View style={styles.containerControls}>
          <CancelButton title={'Cancelar'} onPress={onCancel} />
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerControls: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    gap: 10,
  },
});
