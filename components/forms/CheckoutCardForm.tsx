import React, { useState } from 'react';
import { Image, StyleSheet, ScrollView, View } from 'react-native';
import { SecureButton } from '@components/buttons/SecureButton';
import InputLabel from '@components/inputs/InputLabel';
import { default as InputSecure } from '@components/inputs/InputPassword';
import logo from '@assets/third-party/conekta.png';

export const CheckoutCardForm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logoStyle} />
      </View>
      <ScrollView>
        <InputSecure
          label={'Numero de tarjeta'}
          onChangeText={function (text: string): void {}}
        />
        <InputLabel
          label={'Propietario'}
          placeholder={'Ex. Octavio Paz'}
          onChangeText={function (text: string): void {}}
          style={undefined}
        />
        <View style={styles.subContainer}>
          <InputLabel
            label={'Expiracion'}
            placeholder={'02/20'}
            onChangeText={function (text: string): void {}}
            style={styles.row}
          />
          <InputSecure
            label={'CVC'}
            onChangeText={function (text: string): void {}}
            style={styles.row}
          />
        </View>
      </ScrollView>
      <View style={styles.buttons}>
        <SecureButton label={'Agregar'} type={'append'} />
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
