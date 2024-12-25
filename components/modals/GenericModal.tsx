import React, { PropsWithChildren } from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export function GenericModal({ isVisible, children, onClose }: Props) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Registrar tarjeta</Text>
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
    paddingHorizontal: 25,
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
