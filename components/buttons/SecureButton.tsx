import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

interface SecureButtonProps {
  label: string;
}

export const SecureButton = ({ label }: SecureButtonProps) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000000',
    borderRadius: 15,
    padding: 20,
    color: 'white',
    flexDirection: 'row',
    margin: 5,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
