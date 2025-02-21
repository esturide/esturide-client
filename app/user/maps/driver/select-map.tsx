import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTravelScheduleRoute } from '@components/context/RouteNavigatorContext';
import UserMapViewer from '@components/cards/maps/UserMapViewer';
import { useUserPosition } from '@components/context/UserCurrentLocation';
import BottomSheet from '@components/modals/sheets/BottomSheet';
import CancelButton from '@components/buttons/CancelButton';
import GreenButton from '@components/buttons/GreenButton';

export default function SelectMap() {
  const { setCurrentRoute } = useTravelScheduleRoute();
  const { location, isLoading } = useUserPosition();

  useEffect(() => {
    if (isLoading) {
      console.log(`MapView is loading`);
    } else {
      console.log(`MapView is load`);
    }
  }, [isLoading]);

  const onSchedule = async () => {
    setCurrentRoute('/user/maps/driver/schedule-travel');
  };

  const onCancel = async () => {
    setCurrentRoute('/user/maps');
  };

  return (
    <View style={styles.container}>
      <UserMapViewer location={location} />
      <BottomSheet>
        <View style={styles.containerControls}>
          <GreenButton title={'Iniciar'} onPress={onSchedule} />
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
