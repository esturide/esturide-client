import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import InputLabel from '@components/inputs/InputLabel';
import { stringToNumber } from '@libs/cast';

type Props = {
  label: string;
  maxPrice?: number;
  setPrice?: (price: number) => void;
  price?: number;
};

export default function InputPrice({ label, setPrice, price = 0 }: Props) {
  const [travelPrice, setTravelPrice] = useState(`${price}`);
  const [isValidPrice, setIsValidPrice] = useState(false);

  const onSetValue = async (value: string) => {
    const [status, integer] = stringToNumber(value);

    setTravelPrice(value);

    if (setPrice !== null && status) {
      setPrice(integer);
    }

    setIsValidPrice(!status);
  };

  return (
    <View style={styles.container}>
      <InputLabel
        label={label}
        value={`${travelPrice}`}
        onChangeText={onSetValue}
        typeInput={'numeric'}
        error={isValidPrice}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
