import React from 'react';
import AdBanner from '@components/banners/AdBanner';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import BlueButton from '@components/buttons/BlueButton';
import { SearchBar } from '@components/cards/SearchBar';
import { defaultPassengerColor } from '@const/DefaultColors';
import CompactBlueButton from '@components/buttons/compact/CompactBlueButton';

export default function SearchTravel() {
  const CardTravel = () => {
    return (
      <View style={styles.travelCard}>
        <Text>CUTONALA</Text>
        <Text>Hora de Salida: 5:45pm</Text>
        <CompactBlueButton title={'Solicitar'} />
      </View>
    );
  };

  return (
    <>
      <AdBanner />

      <View style={styles.container}>
        <View style={styles.controls}>
          <SearchBar />
        </View>

        <View style={styles.travelList}>
          <ScrollView>
            <CardTravel />
            <CardTravel />
            <CardTravel />
          </ScrollView>
        </View>

        <View style={styles.controls}>
          <BlueButton title={'Actualizar'} />
          <BlueButton title={'Filtrar'} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  message: {
    flexGrow: 1,
    alignContent: 'center',
    alignSelf: 'center',
  },
  messageText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  controls: {
    flexDirection: 'row-reverse',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  travelList: {
    flex: 1,
    gap: 5,
    flexDirection: 'column',
  },
  travelCard: {
    gap: 15,
    margin: 5,
    padding: 15,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: defaultPassengerColor,
  },
});
