// app/screens/EmptyTripsScreenPassenger.tsx

import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AdBanner from '@components/banners/AdBanner';
import BottomNavigationBar from '@components/buttons/navigation/BottomNavigationBar';
import FilterModalPassenger from '@components/modals/FilterModalPassenger';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const EmptyTripsScreenPassenger: React.FC = () => {
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Ad Banner */}
      <AdBanner />

      {/* Contenido Principal */}
      <View style={styles.content}>
        {/* Icono de ubicación */}
        <View style={styles.iconContainer}>
          <Image
            source={require('@assets/location-blue-icon.png')}
            style={{ width: 250, height: 200 }}
          />
        </View>

        {/* Mensaje */}
        <Text style={styles.title}>Aún no tienes viajes en tu lista.</Text>
        <Text style={styles.subtitle}>
          Toca el botón '+' para agregar uno nuevo.
        </Text>
      </View>

      {/* Botones flotantes */}
      <View style={styles.floatingButtons}>
        <TouchableOpacity style={styles.addButton}>
          <MaterialIcons name="add" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setFilterModalVisible(true)}
        >
          <MaterialCommunityIcons name="tune-variant" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <BottomNavigationBar userType="passenger" currentPage="add" />

      {/* Modal de Filtros */}
      <FilterModalPassenger
        visible={isFilterModalVisible}
        onClose={() => setFilterModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 140, // Añade espacio en la parte inferior para subir el contenido
  },
  iconContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#76797D',
    textAlign: 'center',
    marginTop: 4,
  },
  floatingButtons: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#4958AC',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
    elevation: 5,
  },
  filterButton: {
    backgroundColor: '#4958AC',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default EmptyTripsScreenPassenger;
