import React from 'react';
import { StyleSheet, View } from 'react-native';
import Map from '@components/cards/Map';
import ButtonLocationBlue from '@components/buttons/location/ButtonLocationBlue';
import AbsoluteLayout from '@components/layouts/AbsoluteLayout';
import { useTravelScheduleRoute } from '@components/context/RouteNavigatorContext';
import { useCurrentPosition } from '@components/context/LocationContext';

export default function SelectMap() {
  const { currentRoute, setCurrentRoute } = useTravelScheduleRoute();
  const location = useCurrentPosition();

  const onPress = async () => {
    setCurrentRoute('/user/maps/driver/schedule-travel');
  };

  return (
    <View style={styles.container}>
      <Map origin={location} />
      {location !== null && (
        <AbsoluteLayout>
          <ButtonLocationBlue onPress={onPress} />
        </AbsoluteLayout>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
