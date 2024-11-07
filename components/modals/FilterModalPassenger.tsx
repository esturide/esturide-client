// app/components/modals/FilterModalPassenger.tsx

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface FilterModalPassengerProps {
  visible: boolean;
  onClose: () => void;
}

const FilterModalPassenger: React.FC<FilterModalPassengerProps> = ({
  visible,
  onClose,
}) => {
  const [showMen, setShowMen] = React.useState(false);
  const [showWomen, setShowWomen] = React.useState(false);
  const [allowEating, setAllowEating] = React.useState(false);

  return (
    <Modal visible={visible} transparent animationType="slide">
      <TouchableOpacity
        style={styles.modalBackground}
        activeOpacity={1}
        onPress={onClose}
      >
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPress={() => {}}
        >
          {/* Close Button */}
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Ionicons name="close" size={24} color="#333" />
          </TouchableOpacity>

          {/* Modal Header */}
          <Text style={styles.headerTitle}>Filtros</Text>

          {/* Filter Options */}
          <Text style={styles.sectionTitle}>Mostrarme conductores:</Text>
          <View style={styles.filterOption}>
            <Text style={styles.optionText}>Hombres</Text>
            <Switch
              value={showMen}
              onValueChange={() => setShowMen(!showMen)}
            />
          </View>
          <View style={styles.filterOption}>
            <Text style={styles.optionText}>Mujeres</Text>
            <Switch
              value={showWomen}
              onValueChange={() => setShowWomen(!showWomen)}
            />
          </View>
          <View style={styles.filterOption}>
            <Text style={styles.optionText}>Permitido comer</Text>
            <Switch
              value={allowEating}
              onValueChange={() => setAllowEating(!allowEating)}
            />
          </View>

          {/* Confirm Button */}
          <TouchableOpacity style={styles.confirmButton} onPress={onClose}>
            <Text style={styles.confirmButtonText}>Confirmar</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </TouchableOpacity>
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
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  filterOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  confirmButton: {
    backgroundColor: '#4958AC',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FilterModalPassenger;
