import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import InputLabel from '@components/inputs/InputLabel';
import { InputRow } from '@components/layouts/RowLayout';
import { Ionicons } from '@expo/vector-icons';

interface AddVehicleModalProps {
  visible: boolean;
  onClose: () => void;
}

const AddVehicleModal: React.FC<AddVehicleModalProps> = ({
  visible,
  onClose,
}) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.overlay}
        onPress={onClose}
        activeOpacity={1}
      >
        <TouchableOpacity style={styles.modalContent} activeOpacity={1}>
          <View style={styles.header}>
            <Text style={styles.title}>Agregar Vehículo</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
          </View>

          <InputLabel
            label="Marca"
            style={styles.input}
            onChangeText={() => {}}
          />
          <InputLabel
            label="Modelo"
            style={styles.input}
            onChangeText={() => {}}
          />
          <InputRow>
            <InputLabel
              label="Año"
              style={styles.halfInput}
              onChangeText={() => {}}
            />
            <InputLabel
              label="Placas"
              style={styles.halfInput}
              onChangeText={() => {}}
            />
          </InputRow>
          <InputLabel
            label="Color"
            style={styles.input}
            onChangeText={() => {}}
          />

          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Agregar</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    height: '75%',
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    right: 0,
  },
  input: {
    width: '100%',
    marginBottom: 16,
  },
  halfInput: {
    width: '48%',
    color: '#254A44',
  },
  addButton: {
    backgroundColor: '#00796B',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddVehicleModal;
