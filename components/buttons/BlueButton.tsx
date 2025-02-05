import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { GenericButtonProps } from '@components/buttons/props/ButtonProps';

const BlueButton = ({
  title,
  onPress,
  disabled = false,
}: GenericButtonProps) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress} disabled={disabled}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BlueButton;

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: '#4b61b9',
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
    backgroundColor: '#4b61b9',
  },
});
