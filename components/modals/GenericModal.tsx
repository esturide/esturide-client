import React, { PropsWithChildren } from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';

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
    <Modal animationType="slide" transparent={true} visible={isVisible}>
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

const styles = StyleSheet.create({
  modalContent: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
  },
  titleContainer: {
    padding: 25,
    backgroundColor: '#000000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
