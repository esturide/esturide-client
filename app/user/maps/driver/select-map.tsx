import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTravelScheduleRoute } from '@components/context/RouteNavigatorContext';
import UserMapViewer from '@components/cards/maps/UserMapViewer';
import { useUserPosition } from '@components/context/UserCurrentLocation';
import Loading from '@components/visuals/resources/Loading';
import BottomSheet from '@components/modals/sheets/BottomSheet';
import CancelButton from '@components/buttons/CancelButton';
import BlueButton from '@components/buttons/BlueButton';
import GreenButton from '@components/buttons/GreenButton';

export default function SelectMap() {
  const { setCurrentRoute } = useTravelScheduleRoute();
  const { isLoading } = useUserPosition();

  const onSchedule = async () => {
    setCurrentRoute('/user/maps/driver/schedule-travel');
  };

  const onCancel = async () => {
    setCurrentRoute('/user/maps/');
  };

  if (isLoading) {
    return <Loading visible={true} />;
  }

  return (
    <View style={styles.container}>
      <UserMapViewer />

      <BottomSheet>
        <GreenButton title={'Crear'} onPress={onSchedule} />
        <CancelButton title={'Cancelar'} onPress={onCancel} />
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
