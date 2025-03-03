import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CardSeat from '@components/cards/CardSeat';
import CardItemPresentation from '@components/cards/item/CardItemPresentation';

type Props = {
  onPress?: (seat: string, status: boolean) => Promise<void>;
};

export default function InputSeats({ onPress }: Props) {
  const [seatA, setSeatA] = useState(false);
  const [seatB, setSeatB] = useState(false);
  const [seatC, setSeatC] = useState(false);

  const pressSeat = (seat: string, status: boolean) => {
    return async () => {
      if (onPress !== undefined) {
        await onPress(seat, status);
      }
    };
  };

  useEffect(() => {
    pressSeat('A', seatA)();
  }, [seatA]);

  useEffect(() => {
    pressSeat('B', seatB)();
  }, [seatB]);

  useEffect(() => {
    pressSeat('C', seatC)();
  }, [seatC]);

  return (
    <CardItemPresentation title={'Asientos'}>
      <View style={styles.seats}>
        <CardSeat seat={'A'} onPress={setSeatA} />
        <CardSeat seat={'B'} onPress={setSeatB} />
        <CardSeat seat={'C'} onPress={setSeatC} />
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
