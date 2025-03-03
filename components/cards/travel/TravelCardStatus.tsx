import React from 'react';
import { StyleSheet, View } from 'react-native';
import CardTravel, { ArrayPassengers } from '@components/cards/CardTravel';
import { formatDate2Digits } from '@libs/format/dates';

type Props = {
  price: number;
  starting: Date;
  finished: Date;
  seats: ArrayPassengers[];
};

export const TravelCardStatus = ({
  price,
  starting,
  finished,
  seats = [],
}: Props) => {
  return (
    <View style={styles.container}>
      <CardTravel
        typeCard={'driver'}
        departTime={formatDate2Digits(starting)}
        arrivalTime={formatDate2Digits(finished)}
        price={price}
        seatsArr={seats}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
