// app/screens/DepositSuccessPassengerScreen.tsx

import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import AdBanner from '@components/AdBanner';
import BottomNavigationBar from '@components/buttons/navigation/BottomNavigationBar';

const DepositSuccessPassengerScreen: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Ad Banner */}
      <AdBanner />

      {/* Contenido Principal */}
      <View style={styles.content}>
        <Text style={styles.title}>Depósito Exitoso</Text>

        {/* Icono de confirmación */}
        <Image
          source={require('../../assets/check-blue-icon.png')} // Asegúrate de agregar el ícono en azul en la carpeta assets
          style={styles.checkIcon}
        />

        {/* Cantidad depositada */}
        <Text style={styles.amount}>$100.00</Text>

        {/* Información del depósito */}
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Referencia</Text>
            <Text style={styles.infoValue}>PRN156</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Método de Pago</Text>
            <Text style={styles.infoValue}>Débito</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Terminación</Text>
            <Text style={styles.infoValue}>**** 8395</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Saldo Actual</Text>
            <Text style={styles.infoValue}>$200.00</Text>
          </View>
        </View>

        {/* Botón de Regresar */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push('/home')}
        >
          <Text style={styles.backButtonText}>Regresar</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <BottomNavigationBar userType="passenger" currentPage="profile" />
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
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  checkIcon: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4958AC', // Azul para el pasajero
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#F3F4F6',
    borderRadius: 10,
    padding: 10,
    marginVertical: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  infoLabel: {
    fontSize: 16,
    color: 'black',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  backButton: {
    backgroundColor: '#4958AC', // Azul para el pasajero
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 100,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DepositSuccessPassengerScreen;
