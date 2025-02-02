import { StyleSheet, Text, View } from 'react-native';
import CardSeat from '@components/cards/CardSeat';
import React from 'react';

export default function InputSeats() {
  return (
    <View style={styles.container}>
      <Text>Asientos disponibles</Text>
      <View style={styles.seats}>
        <CardSeat seat={'A'} />
        <CardSeat seat={'B'} />
        <CardSeat seat={'C'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seats: {
    flexDirection: 'row',
    gap: 15,
    margin: 5,
  },
});
