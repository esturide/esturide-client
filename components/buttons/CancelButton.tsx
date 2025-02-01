import * as React from 'react';
import { Pressable, Text } from 'react-native';
import { GenericButtonProps } from '@components/buttons/props/ButtonProps';

import styles from '@styles/InputButtons';

const CancelButton = ({ title, onPress }: GenericButtonProps) => {
  return (
    <Pressable style={styles.btnCancel} onPress={onPress}>
      <Text style={styles.btnCancelText}>{title}</Text>
    </Pressable>
  );
};

export default CancelButton;
