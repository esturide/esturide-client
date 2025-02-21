import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTravelScheduleRoute } from '@components/context/RouteNavigatorContext';
import { useUserPosition } from '@components/context/UserCurrentLocation';
import SelectDestinationMap from '@components/cards/maps/SelectDestinationMap';
import BottomSheet from '@components/modals/sheets/BottomSheet';
import SwitchButton from '@components/buttons/switch/SwitchButton';
import InputSwitch from '@components/inputs/InputSwitch';
import CardItemPresentation from '@components/cards/item/CardItemPresentation';
import GreenButton from '@components/buttons/GreenButton';
import { SearchBar } from '@components/cards/SearchBar';
import { GenericModal } from '@components/modals/GenericModal';
import { Position } from '@const/Position';

export default function SelectDestination() {
  const { location, isLoading } = useUserPosition();
  const { travelRequestForm, setCurrentRoute, setDestination } =
    useTravelScheduleRoute();
  const [showSearchModal, setShowSearchModal] = useState(false);

  useEffect(() => {
    if (isLoading) {
      console.log(`MapView is loading`);
    } else {
      console.log(`MapView is load`);
    }
  }, [isLoading]);

  const onPress = async () => {
    setCurrentRoute('/user/maps/driver/schedule-travel');
  };

  const onPressMark = async (location: Position) => {
    setDestination(location);
    console.log(travelRequestForm.destination);
  };

  const onShowSearchModal = async () => {
    setShowSearchModal(true);
  };

  const onCloseSearchModal = async () => {
    setShowSearchModal(false);
  };

  const SwitchDestination = () => {
    return (
      <CardItemPresentation title={'Destino'}>
        <SwitchButton
          firstLabel={'CUTONALA'}
          secondLabel={'Casa'}
          thirdLabel={'Personalizado'}
          firstStateStyle={'#449e92'}
          secondStateStyle={'#125046'}
          thirdStateStyle={'#125046'}
        />
        <GreenButton title={'Buscar'} onPress={onShowSearchModal} />
      </CardItemPresentation>
    );
  };

  const OptionsMap = () => {
    return (
      <CardItemPresentation title={'Filtros'}>
        <InputSwitch label={'Comida'} scheme={'green'} />
        <InputSwitch label={'Bebidas'} scheme={'green'} />
      </CardItemPresentation>
    );
  };

  const SearchModal = () => {
    return (
      <GenericModal visible={showSearchModal} onClose={onCloseSearchModal}>
        <View style={styles.containerSearchModal}>
          <View>
            <SearchBar />
            <GreenButton title={'Buscar'} onPress={onCloseSearchModal} />
          </View>
        </View>
      </GenericModal>
    );
  };

  return (
    <View style={styles.container}>
      <SelectDestinationMap location={location} onPress={onPressMark} />

      <BottomSheet>
        <View style={styles.containerControls}>
          <View style={styles.controlsRow}>
            <SwitchDestination />
            <OptionsMap />
          </View>

          <View style={styles.controlsRow}>
            <GreenButton title={'Establecer'} onPress={onPress} />
          </View>
        </View>
      </BottomSheet>
      <SearchModal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerControls: {
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    gap: 16,
  },
  controlsRow: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    gap: 5,
  },
  controlsColumn: {
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    gap: 5,
  },
  containerSearchModal: {
    flex: 1,
    margin: 25,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    gap: 5,
  },
});
