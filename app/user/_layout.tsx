import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Slot } from 'expo-router';

export default function UserLayout() {
  return (
    <View style={styles.flexContainer}>
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f2422',
    padding: 16,
  },
});
