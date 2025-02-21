import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTravelScheduleRoute } from '@components/context/RouteNavigatorContext';
import UserMapViewer from '@components/cards/maps/UserMapViewer';
import { useUserPosition } from '@components/context/UserCurrentLocation';
import BottomSheet from '@components/modals/sheets/BottomSheet';
import CancelButton from '@components/buttons/CancelButton';
import BlueButton from '@components/buttons/BlueButton';

export default function SelectMapRide() {
  const { setCurrentRoute } = useTravelScheduleRoute();
  const { location, isLoading } = useUserPosition();

  useEffect(() => {}, [isLoading]);

  const onSchedule = async () => {
    setCurrentRoute('/user/maps/passenger/search-travel');
  };

  const onCancel = async () => {
    setCurrentRoute('/user/maps');
  };

  return (
    <View style={styles.container}>
      <UserMapViewer location={location} />
      <BottomSheet>
        <View style={styles.containerControls}>
          <BlueButton title={'Iniciar'} onPress={onSchedule} />
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
