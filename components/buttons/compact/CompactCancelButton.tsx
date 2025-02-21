import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { GenericButtonProps } from '@components/buttons/props/ButtonProps';

const CompactCancelButton = ({
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

export default CompactCancelButton;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 9,
    backgroundColor: '#cc1616',
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
    backgroundColor: '#cc1616',
  },
});
