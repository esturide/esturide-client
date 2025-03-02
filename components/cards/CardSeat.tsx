import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  seat: string;
  onPress?: (enabled: boolean) => void;
};

export default function CardSeat({ seat, onPress }: Props) {
  const [enabledSeat, setEnabledSeat] = useState(true);

  const switchEnabled = async () => {
    setEnabledSeat(!enabledSeat);

    if (onPress) {
      onPress(enabledSeat);
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
