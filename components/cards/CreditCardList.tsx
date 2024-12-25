import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import styles, {
  DefaultDriverColors,
  DefautPassengerColor,
} from '@styles/CreditCardList';
import CustomRadioButtonGroup from '@components/cards/CustomRadioButtonGroup';
import {
  CreditCard,
  CreditCardListProps,
} from '@components/cards/credit/CreditCard';

export default function CreditCardList({
  data,
  typeCard,
  onAppend,
  onCancel,
}: CreditCardListProps) {
  const headerStyles = {
    driver: { ...styles.textHeader, color: DefaultDriverColors.header },
    passenger: { ...styles.textHeader, color: DefautPassengerColor.header },
  };

  useEffect(() => {
    console.log('Update card');
  }, [data]);

  return (
    <View style={styles.container}>
      <Text style={headerStyles[typeCard]}>Tarjetas</Text>
      <View style={styles.cardsContainer}>
        <View>
          <CustomRadioButtonGroup data={data} typeButton={typeCard} />
        </View>
        <CreditCard data={data} typeCard={typeCard} />
      </View>
    </View>
  );
}
