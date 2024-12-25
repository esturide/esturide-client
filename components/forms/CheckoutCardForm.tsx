import React, { useState } from 'react';
import { Image, StyleSheet, ScrollView, View, ViewStyle } from 'react-native';
import { SecureButton } from '@components/buttons/SecureButton';
import InputLabel from '@components/inputs/InputLabel';
import { default as InputSecure } from '@components/inputs/InputPassword';
import logo from '@assets/third-party/conekta.png';

type Props = {
  onSubmit?: (
    number: string,
    property: string,
    exp: string,
    cvc: string,
  ) => Promise<void>;
};

export const CheckoutCardForm = ({ onSubmit }: Props) => {
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardProperty, setCardProperty] = useState<string>('');
  const [cardExpiration, setCardExpiration] = useState<string>('');
  const [cardCVC, setCardCVC] = useState<string>('');

  const submitCard = async () => {
    if (onSubmit !== undefined) {
      await onSubmit(cardNumber, cardProperty, cardExpiration, cardCVC);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logoStyle} />
      </View>
      <ScrollView>
        <InputSecure label={'Numero de tarjeta'} onChangeText={setCardNumber} />
        <InputLabel
          label={'Propietario'}
          placeholder={'Ex. Octavio Paz'}
          onChangeText={setCardProperty}
          style={undefined}
        />
        <View style={styles.subContainer}>
          <InputLabel
            label={'Expiracion'}
            placeholder={'02/20'}
            onChangeText={setCardExpiration}
            style={styles.row}
          />
          <InputSecure
            label={'CVC'}
            onChangeText={setCardCVC}
            style={styles.row}
          />
        </View>
      </ScrollView>
      <View style={styles.buttons}>
        <SecureButton label={'Agregar'} type={'append'} onPress={submitCard} />
        <SecureButton label={'Cancelar'} type={'cancel'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
  },
  logoStyle: {
    aspectRatio: 2,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  subContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  row: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    paddingVertical: 20,
    textAlign: 'center',
  },
  buttons: {},
});
