import React, { PropsWithChildren } from 'react';
import { Modal, View, Text, Pressable } from 'react-native';
import { router } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import styles from '@styles/modals/GenericModalStyle';

type Props = PropsWithChildren<{
  title?: string;
  isVisible: boolean;
  onClose?: () => Promise<void>;
}>;

export function GenericModal({
  title = '',
  isVisible,
  children,
  onClose = async () => {
    router.back();
  },
}: Props) {
  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name={'close'} color={'white'} size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}
