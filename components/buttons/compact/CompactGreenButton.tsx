import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { GenericButtonProps } from '@components/buttons/props/ButtonProps';

const CompactGreenButton = ({
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

export default CompactGreenButton;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 9,
    backgroundColor: '#2f7265',
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 3,
  },
  text: {
    fontSize: 19,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'left',
  },
  pressed: {
    backgroundColor: '#2e6b5c',
  },
});
