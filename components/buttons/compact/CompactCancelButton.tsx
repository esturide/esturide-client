import * as React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { GenericButtonProps } from '@components/buttons/props/ButtonProps';

const CompactCancelButton = ({ title, onPress }: GenericButtonProps) => {
  return (
    <Pressable style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
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
