import React from 'react';
import { Text } from 'react-native';
import CreditCardList from '@components/cards/CreditCardList';

export default function IndexTest() {
  return (
    <>
      <Text>Hello World from Index</Text>
      <CreditCardList typeCard="driver" data={[]} />
    </>
  );
}
