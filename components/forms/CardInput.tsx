import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import InputLabel from '@components/inputs/InputLabel';

export const CardInput = () => {
  return (
    <View style={styles.container}>
      <InputLabel
        label={'Card number'}
        onChangeText={function (text: string): void {}}
        style={undefined}
        floatLabel={true}
      />
      <InputLabel
        label={'Card number'}
        onChangeText={function (text: string): void {}}
        style={undefined}
        floatLabel={true}
      />
      <View>
        <InputLabel
          label={'Expire date'}
          onChangeText={function (text: string): void {}}
          style={undefined}
        />
        <InputLabel
          label={'Security code'}
          onChangeText={function (text: string): void {}}
          style={undefined}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    padding: 20,
  },
});
