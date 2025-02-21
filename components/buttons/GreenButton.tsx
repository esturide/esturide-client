import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { GenericButtonProps } from '@components/buttons/props/ButtonProps';

const GreenButton = ({
  title,
  onPress,
  disabled = false,
}: GenericButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btn, disabled ? styles.disabled : styles.enabled]}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default GreenButton;

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    height: 51,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 44,
    paddingVertical: 7,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  pressed: {
    backgroundColor: '#2e6b5c',
  },
  disabled: {
    backgroundColor: '#707070',
  },
  enabled: {
    backgroundColor: '#2f7265',
  },
});
