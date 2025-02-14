import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import InputLabel from '@components/inputs/InputLabel';
import { stringToNumber } from '@libs/cast';

type Props = {
  label: string;
  maxPrice?: number;
  setPrice?: (price: number) => void;
};

export default function InputPrice({ label, setPrice }: Props) {
  const [travelPrice, setTravelPrice] = useState('');
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
