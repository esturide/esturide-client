import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from '@styles/InputButtons';

/**
 * @deprecated This component is deprecated and will be removed in future versions.
 * Please use `InputButton` instead.
 */
const ButtonSubmit = ({ title, onPress, style }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.btnSubmit,
        style,
        pressed ? styles.btnSubmitPressed : null,
      ]}
    >
      <Text style={styles.btnSubmitText}>{title}</Text>
    </Pressable>
  );
};

export default ButtonSubmit;
