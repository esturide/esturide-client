import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputLabel from '@components/inputs/InputLabel';
import GreenButton from '@components/buttons/GreenButton';
import CompactGreenButton from '@components/buttons/compact/CompactGreenButton';

export const SearchBar = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerInputs}>
          <InputLabel
            label={'Domicilio de destino'}
            placeholder={'Av. Zoquipan'}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  containerInputs: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    alignItems: 'center',
    gap: 17,
  },
  search: {
    flex: 1,
  },
});
