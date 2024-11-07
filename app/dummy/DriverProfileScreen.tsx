// app/dummy/DriverProfileScreen.tsx

import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AdBanner from '@components/AdBanner';
import BottomNavigationBar from '@components/buttons/navigation/BottomNavigationBar';
import WithdrawalNoticeModal from '@components/modals/WithdrawalNoticeModal';

const DriverProfileScreen: React.FC = () => {
  const [isWithdrawalModalVisible, setWithdrawalModalVisible] = useState(false);

  const handleOptionPress = (option: string) => {
    if (option === 'Retirar Capital') {
      setWithdrawalModalVisible(true);
    }
    // Puedes añadir acciones para otras opciones aquí, si es necesario
  };

  return (
    <View style={styles.container}>
      {/* Contenido de la pantalla */}
      <View style={styles.content}>
        {/* Ad Banner */}
        <AdBanner />

        {/* User Info */}
        <View style={styles.userInfoContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.role}>Conductor</Text>
            <Text style={styles.userName}>Raul Jiménez Rodríguez</Text>
          </View>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.userImage}
          />
        </View>

        {/* QR Code */}
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.qrCode}
        />

        {/* Menu Options */}
        <View style={styles.menuContainer}>
          {[
            'Información',
            'Depositar Capital',
            'Retirar Capital',
            'Cambiar a Pasajero',
          ].map((option, index) => (
            <TouchableOpacity 
            key={index} 
            style={styles.menuItem} 
            onPress={() => handleOptionPress(option)}>

              <Text style={styles.menuText}>{option}</Text>
              <Image
                source={require('../../assets/arrow-forward.png')} // Reemplaza con la imagen de la flecha
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <BottomNavigationBar userType='driver' currentPage='profile' />
      {/* Modal para Retiro de Capital */}
      <WithdrawalNoticeModal
        visible={isWithdrawalModalVisible}
        onClose={() => setWithdrawalModalVisible(false)}
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
    flex: 1, // Hace que el contenido ocupe todo el espacio disponible arriba de la barra de navegación
    padding: 16,
  },
  userInfoContainer: {
    alignItems: 'center',
    flexDirection: 'row', // Alinea los elementos en columna
    marginTop: 16,
  },
  textContainer: {
    flex: 1,
    marginLeft: 7,
  },
  role: {
    color: '#00796B',
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
    width: 54,
    height: 54,
    borderRadius: 40,
    marginTop: 10,
  },
  qrCode: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginVertical: 20,
  },
  menuContainer: {
    marginTop: 20,
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
    fontWeight: 'bold', // Ajusta el peso si es necesario
    fontFamily: 'Inter',
    
  },
  arrowIcon: {
    width: 16, // Ajusta el tamaño según tu icono
    height: 16,
    marginRight: 8,
  },
});

export default DriverProfileScreen;
