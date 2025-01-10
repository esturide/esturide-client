import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

type Props = {
  seat: string;
  setEnabled?: (enabled: boolean) => Promise<void>;
};

export default function CardSeat({ seat, setEnabled }: Props) {
  const [enabledSeat, setEnabledSeat] = useState(false);

  const switchEnabled = async () => {
    setEnabledSeat(!enabledSeat);

    if (setEnabled) {
      await setEnabled(enabledSeat);
    }
  };

  return (
    <>
      <Pressable onPress={switchEnabled}>
        <View
          style={[
            styles.container,
            enabledSeat ? styles.seatOccupied : styles.seatUnoccupied,
          ]}
        >
          <Text>{seat}</Text>
        </View>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 10,
  },
  seatOccupied: {
    backgroundColor: '#df4617',
  },
  seatUnoccupied: {
    backgroundColor: '#5ca336',
  },
});
