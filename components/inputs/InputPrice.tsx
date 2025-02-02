import { StyleSheet, View } from 'react-native';
import InputLabel from '@components/inputs/InputLabel';
import React, { useState } from 'react';
import { stringToNumber } from '@libs/cast';

type Props = {
  setPrice?: (price: number) => void;
};

export default function InputPrice({ setPrice }: Props) {
  const [travelPrice, setTravelPrice] = useState('');

  const onSetValue = (value: string) => {
    const [validValue, numberValue] = stringToNumber(value);

    if (validValue) {
      setTravelPrice(value);

      if (setPrice !== null) {
        setPrice(numberValue);
      }
    }
  };

  return (
    <View style={styles.container}>
      <InputLabel
        label={'Precio'}
        onChangeText={onSetValue}
        value={`${travelPrice}`}
        typeInput={'numeric'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
