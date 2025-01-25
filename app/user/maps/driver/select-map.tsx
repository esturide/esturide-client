import React from 'react';
import { StyleSheet, View } from 'react-native';
import ButtonLocationBlue from '@components/buttons/location/ButtonLocationBlue';
import AbsoluteBottomLayout from '@components/layouts/AbsoluteBottomLayout';
import { useTravelScheduleRoute } from '@components/context/RouteNavigatorContext';
import { useUserPosition } from '@components/context/UserCurrentLocation';
import UserMapViewer from '@components/cards/maps/UserMapViewer';

export default function SelectMap() {
  const { currentRoute, setCurrentRoute } = useTravelScheduleRoute();
  const { location } = useUserPosition();

  const onPress = async () => {
    setCurrentRoute('/user/maps/driver/schedule-travel');
  };

  return (
    <View style={styles.container}>
      <UserMapViewer latitudeDelta={0.0021} longitudeDelta={0.0021} />
      {location !== null && (
        <AbsoluteBottomLayout>
          <ButtonLocationBlue onPress={onPress} />
        </AbsoluteBottomLayout>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
