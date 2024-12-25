import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

interface SecureButtonProps {
  label: string;
  type?: 'generic' | 'cancel' | 'append';
}

const styleButton = {
  cancel: {
    backgroundColor: '#c30808',
  },
  append: {
    backgroundColor: '#2887e6',
  },
  generic: {
    backgroundColor: '#000000',
  },
};

export const SecureButton = ({
  label,
  type = 'generic',
}: SecureButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, styleButton[type]]}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    padding: 15,
    margin: 10,
    color: 'white',
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
