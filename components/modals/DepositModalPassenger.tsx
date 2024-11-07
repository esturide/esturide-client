// app/components/modals/DepositModalPassenger.tsx

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface DepositModalPassengerProps {
  visible: boolean;
  onClose: () => void;
}

const DepositModalPassenger: React.FC<DepositModalPassengerProps> = ({
  visible,
  onClose,
}) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalBackground}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              {/* Close Button */}
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Ionicons name="close" size={24} color="#333" />
              </TouchableOpacity>

              {/* Modal Header */}
              <Text style={styles.headerTitle}>Depositar</Text>

              {/* Sección de Tarjetas */}
              <Text style={styles.sectionTitle}>Tarjetas</Text>
              <View style={styles.cardContainer}>
                <View style={styles.cardItem}>
                  <Image
                    source={{ uri: 'https://via.placeholder.com/30' }}
                    style={styles.cardLogo}
                  />
                  <Text style={styles.cardText}>
                    Banco NU **** **** **** 8395
                  </Text>
                  <Ionicons name="radio-button-on" size={24} color="#4958AC" />
                </View>
                <View style={styles.cardItem}>
                  <Image
                    source={{ uri: 'https://via.placeholder.com/30' }}
                    style={styles.cardLogo}
                  />
                  <Text style={styles.cardText}>
                    RappiCard **** **** **** 6246
                  </Text>
                  <Ionicons name="radio-button-off" size={24} color="#76797D" />
                </View>
                <TouchableOpacity style={styles.addCardButton}>
                  <Ionicons name="add-circle" size={24} color="#4958AC" />
                  <Text style={styles.addCardText}>Agregar tarjeta</Text>
                </TouchableOpacity>
              </View>

              {/* Monto de Depósito */}
              <Text style={styles.sectionTitle}>Monto</Text>
              <TextInput
                style={styles.amountInput}
                defaultValue="$100.00"
                keyboardType="numeric"
              />

              {/* Botón de Confirmar */}
              <TouchableOpacity style={styles.confirmButton}>
                <Text style={styles.confirmButtonText}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4958AC',
    marginVertical: 10,
    alignSelf: 'flex-start',
  },
  cardContainer: {
    backgroundColor: '#F8F9FA',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    width: '100%',
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  cardLogo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  cardText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  addCardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
  },
  addCardText: {
    fontSize: 14,
    color: '#4958AC',
    marginLeft: 5,
  },
  amountInput: {
    backgroundColor: '#F8F9FA',
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
    width: '100%',
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: '#4958AC',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DepositModalPassenger;
