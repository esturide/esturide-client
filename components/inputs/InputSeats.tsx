import { StyleSheet, View } from 'react-native';
import CardSeat from '@components/cards/CardSeat';
import React from 'react';
import CardItemPresentation from '@components/cards/item/CardItemPresentation';

export default function InputSeats() {
  return (
    <CardItemPresentation title={'Asientos'}>
      <View style={styles.seats}>
        <CardSeat seat={'A'} />
        <CardSeat seat={'B'} />
        <CardSeat seat={'C'} />
      </View>
    </CardItemPresentation>
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
