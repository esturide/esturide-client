import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useRouteNavigator } from '@components/context/RouteNavigatorContext';
import UserMapViewer from '@components/cards/maps/UserMapViewer';
import { useUserPosition } from '@components/context/UserCurrentLocation';
import BottomSheet from '@components/modals/sheets/BottomSheet';
import CancelButton from '@components/buttons/CancelButton';
import { usePassengerContext } from '@components/context/PassengerContext';

export default function WaitingDriver() {
  const { setCurrentRoute } = useRouteNavigator();
  const { location } = useUserPosition();
  const { data } = usePassengerContext();

  useEffect(() => {
    if (data?.current !== undefined) {
      console.log(JSON.stringify(data.current));
    }
  }, []);

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
