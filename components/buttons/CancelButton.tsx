import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { GenericButtonProps } from '@components/buttons/props/ButtonProps';

const CancelButton = ({
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

export default CancelButton;

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: '#cc1616',
    overflow: 'hidden',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 44,
    paddingVertical: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  pressed: {
    backgroundColor: '#cc1616',
  },
});
