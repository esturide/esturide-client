import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '@/styles/Inputs';

const InputLabel = ({ label, value, onChangeText, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          value={value} 
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

export default InputLabel;
