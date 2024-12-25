import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputLabel from '@components/inputs/InputLabel';
import { SecureButton } from '@components/buttons/SecureButton';
import ScrollLayout from '@components/layouts/ScrollLayout';
import { default as InputSecure } from '@components/inputs/InputPassword';

export const CheckoutCardForm = () => {
  return (
    <View style={styles.container}>
      <ScrollLayout>
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
            label={'Codigo'}
            onChangeText={function (text: string): void {}}
            style={styles.row}
          />
        </View>
      </ScrollLayout>
      <View style={styles.buttons}>
        <SecureButton label={'Agregar'} type={'append'} />
        <SecureButton label={'Cancelar'} type={'cancel'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
