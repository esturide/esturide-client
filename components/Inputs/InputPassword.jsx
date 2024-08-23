import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '@/styles/Inputs';

const InputPassword = ({ label, value, onChangeText, style }) => {
  const [isSecure, setIsSecure] = useState(true);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          value={value} 
          onChangeText={onChangeText} 
          secureTextEntry={isSecure}
        />
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setIsSecure(!isSecure)}
        >
          <Icon name={isSecure ? 'visibility' : 'visibility-off'} size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputPassword;
