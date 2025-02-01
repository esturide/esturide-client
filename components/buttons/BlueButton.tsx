import * as React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { GenericButtonProps } from '@components/buttons/props/ButtonProps';

const BlueButton = ({ title, onPress }: GenericButtonProps) => {
  return (
    <Pressable style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default BlueButton;

const styles = StyleSheet.create({
  btn: {
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: '#4b61b9',
    width: 302,
    height: 51,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 44,
    paddingVertical: 7,
    marginVertical: 5,
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
