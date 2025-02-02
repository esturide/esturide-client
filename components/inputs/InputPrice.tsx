import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
import CardItemPresentation from '@components/cards/item/CardItemPresentation';

const minimumPrice = 5;

type Props = {
  maxPrice?: number;
  setPrice?: (price: number) => void;
};

export default function InputPrice({ setPrice, maxPrice = 100 }: Props) {
  const [travelPrice, setTravelPrice] = useState(minimumPrice);

  const onSetValue = (value: number) => {
    setTravelPrice(value);

    if (setPrice !== null) {
      setPrice(value);
    }
  };

  return (
    <CardItemPresentation title={`Precio ${travelPrice}`}>
      <Slider
        minimumValue={minimumPrice}
        maximumValue={maxPrice}
        step={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={onSetValue}
      />
    </CardItemPresentation>
  );
}
