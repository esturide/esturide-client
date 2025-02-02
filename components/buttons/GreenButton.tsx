import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { GenericButtonProps } from '@components/buttons/props/ButtonProps';

const GreenButton = ({ title, onPress }: GenericButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.btn}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default GreenButton;

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: '#2f7265',
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
});
