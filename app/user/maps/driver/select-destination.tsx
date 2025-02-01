import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import AbsoluteBottomLayout from '@components/layouts/AbsoluteBottomLayout';
import ButtonLocationBlue from '@components/buttons/location/ButtonLocationBlue';
import { useTravelScheduleRoute } from '@components/context/RouteNavigatorContext';
import { useUserPosition } from '@components/context/UserCurrentLocation';
import Loading from '@components/visuals/resources/Loading';
import SelectMap from '@components/cards/maps/SelectMap';

export default function SelectDestination() {
  const { setCurrentRoute } = useTravelScheduleRoute();
  const { isLoading } = useUserPosition();

  const onPress = async () => {
    setCurrentRoute('/user/maps/driver/schedule-travel');
  };

  if (isLoading) {
    return <Loading visible={true} />;
  }

  return (
    <View style={styles.container}>
      <SelectMap />
      <AbsoluteBottomLayout>
        <ButtonLocationBlue onPress={onPress} />
      </AbsoluteBottomLayout>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
