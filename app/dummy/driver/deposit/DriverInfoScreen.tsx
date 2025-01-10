// app/dummy/DriverInfoScreen.tsx

import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import AdBanner from '@components/banners/AdBanner';
import BottomNavigationBar from '@components/buttons/navigation/BottomNavigationBar';
import AddVehicleModal from '@components/modals/AddVehicleModal';

const DriverInfoScreen: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Ad Banner */}
      <AdBanner />

      {/* Encabezado con flecha de retroceso y título */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image
            source={require('@assets/arrow-back.png')} // Ruta a tu imagen personalizada en assets
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Información</Text>
      </View>

      {/* Contenido de la pantalla */}
      <View style={styles.content}>
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

        {/* Código */}
        <View style={styles.codeContainer}>
          <Text style={styles.label}>Código:</Text>
          <Text style={styles.codeValue}>221388945</Text>
        </View>

        {/* Línea punteada encima de Vehículo */}
        <View style={styles.dottedLine} />

        {/* Información del Vehículo */}
        <Text style={styles.label}>Vehículo:</Text>
        <View style={styles.vehicleContainer}>
          <Text style={styles.vehicleTitle}>Audi 2014</Text>
          <Text style={styles.vehicleInfo}>JLV687 | Blanco</Text>

          {/* Botón en la esquina superior derecha del cuadro verde */}
          <TouchableOpacity onPress={openModal} style={styles.vehicleButton}>
            <Image
              source={require('@assets/add-car.png')} // Cambia a la ruta de tu icono personalizado
              style={styles.editIcon}
            />
          </TouchableOpacity>
          {/* Modal para agregar vehículo */}
          <AddVehicleModal visible={isModalVisible} onClose={closeModal} />
        </View>

        {/* Línea punteada debajo del cuadro verde */}
        <View style={styles.dottedLine} />
      </View>

      <BottomNavigationBar userType="driver" currentPage="profile" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  backIcon: {
    width: 21, // Ajusta el tamaño del icono de retroceso
    height: 21,
    resizeMode: 'contain', // Asegura que la imagen mantenga sus proporciones
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#484C52',
    opacity: 0.75,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  userInfoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 7,
  },
  role: {
    color: '#00796B',
    fontWeight: 'bold',
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
    marginRight: 10,
  },
  qrCode: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginVertical: 20,
  },
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  label: {
    color: '#00796B',
    fontWeight: 'bold',
    fontSize: 19,
    marginRight: 4,
  },
  codeValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  dottedLine: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dotted',
    marginVertical: 10,
  },
  vehicleContainer: {
    borderWidth: 1,
    borderColor: '#3E8E7E',
    padding: 12,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 8,
    marginRight: 10,
    marginLeft: 10,
  },
  vehicleTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
  },
  vehicleInfo: {
    fontSize: 14,
    color: '#76797D',
    marginTop: 4,
  },
  vehicleButton: {
    position: 'absolute',
    top: -14,
    right: -10,
  },
  editIcon: {
    width: 38,
    height: 38,
    resizeMode: 'contain',
  },
});

export default DriverInfoScreen;
