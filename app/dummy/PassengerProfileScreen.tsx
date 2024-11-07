// app/screens/PassengerProfileScreen.tsx

import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AdBanner from '@components/AdBanner';
import BottomNavigationBar from '@components/buttons/navigation/BottomNavigationBar';
import DepositModalPassenger from '@components/modals/DepositModalPassenger';

const PassengerProfileScreen: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const handleOptionPress = (option: string) => {
    if (option === 'Depositar Capital') {
      openModal();
    }
    // Añadir acciones para otras opciones aquí si es necesario
  };

  return (
    <View style={styles.container}>
      {/* Ad Banner */}
      <AdBanner />

      {/* Contenido Principal */}
      <View style={styles.content}>
        {/* User Info */}
        <View style={styles.userInfoContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.userImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.role}>Pasajero</Text>
            <Text style={styles.userName}>Susana López Pérez</Text>
          </View>
        </View>

        {/* Información de Código y Capital */}
        <View style={styles.infoContainer}>
          <View style={styles.row}>
            <Text style={styles.label}>Código:</Text>
            <Text style={styles.value}>221388945</Text>
          </View>
          <View style={styles.dottedLine} />
          <View style={styles.row}>
            <Text style={styles.label}>Capital:</Text>
            <Text style={styles.value}>$100.00</Text>
          </View>
        </View>

        {/* Menú de Opciones */}
        <View style={styles.menuContainer}>
          {['Información', 'Depositar Capital', 'Cambiar a Conductor'].map(
            (option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.menuItem}
                onPress={() => handleOptionPress(option)}
              >
                <Text style={styles.menuText}>{option}</Text>
                <Image
                  source={require('../../assets/arrow-forward.png')} // Reemplazar con el icono de flecha
                  style={styles.arrowIcon}
                />
              </TouchableOpacity>
            ),
          )}
        </View>
      </View>

      <BottomNavigationBar userType="passenger" currentPage="profile" />
      {/* Modal de depósito */}
      <DepositModalPassenger visible={isModalVisible} onClose={closeModal} />
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
    padding: 16,
  },
  userInfoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 16,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  role: {
    color: '#4958AC',
    fontWeight: '600',
    fontSize: 19,
  },
  userName: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 2,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  infoContainer: {
    marginTop: 16,
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    paddingLeft: 8,
    marginTop: 8,
  },
  label: {
    color: '#4958AC',
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 8,
  },
  dottedLine: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dotted',
    marginVertical: 8,
  },
  menuContainer: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 10,
  },
  menuText: {
    fontSize: 19,
    color: '#76797D',
    fontWeight: 'bold',
  },
  arrowIcon: {
    width: 16,
    height: 16,
  },
});

export default PassengerProfileScreen;
