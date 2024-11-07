// app/dummy/DepositCapitalScreen.tsx

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';
import AdBanner from '@components/AdBanner';
import BottomNavigationBar from '@components/buttons/navigation/BottomNavigationBar';
import { Ionicons } from '@expo/vector-icons';

const DepositCapitalScreen: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Ad Banner */}
      <AdBanner />

      {/* Encabezado con flecha de retroceso y título */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image
            source={require('../../assets/arrow-back.png')} // Ruta a tu imagen personalizada en assets
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Depositar Capital</Text>
      </View>

      {/* Contenido de la pantalla */}
      <View style={styles.content}>
        {/* Capital Actual */}
        <Text style={styles.label}>
          Capital: <Text style={styles.amount}>$100.00</Text>
        </Text>

        {/* Sección de Tarjetas */}
        <Text style={styles.sectionTitle}>Tarjetas</Text>
        <View style={styles.cardContainer}>
          <View style={styles.cardItem}>
            <Image
              source={{ uri: 'https://via.placeholder.com/30' }}
              style={styles.cardLogo}
            />
            <Text style={styles.cardText}>Banco NU **** **** **** 8395</Text>
            <Ionicons name="radio-button-on" size={24} color="#00796B" />
          </View>
          <View style={styles.cardItem}>
            <Image
              source={{ uri: 'https://via.placeholder.com/30' }}
              style={styles.cardLogo}
            />
            <Text style={styles.cardText}>RappiCard **** **** **** 6246</Text>
            <Ionicons name="radio-button-off" size={24} color="#76797D" />
          </View>
          <TouchableOpacity style={styles.addCardButton}>
            <Ionicons name="add-circle" size={24} color="#00796B" />
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
    color: '#484C52',
    opacity: 0.75,
  },
  backIcon: {
    marginRight: 8,
    width: 21, // Ajusta el tamaño del icono de retroceso
    height: 21,
    resizeMode: 'contain', // Asegura que la imagen mantenga sus proporciones
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#484C52',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#00796B',
    marginBottom: 10,
  },
  amount: {
    fontSize: 18,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#484C52',
    marginVertical: 10,
  },
  cardContainer: {
    backgroundColor: '#F8F9FA',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#000', // Color de la sombra
    shadowOffset: { width: 0, height: 2 }, // Posición de la sombra
    shadowOpacity: 0.25, // Opacidad de la sombra
    shadowRadius: 5, // Radio de la sombra
    elevation: 5, // Sombra para Android
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
    color: '#00796B',
    marginLeft: 5,
  },
  amountInput: {
    backgroundColor: '#F8F9FA',
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
  },
  confirmButton: {
    backgroundColor: '#00796B',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DepositCapitalScreen;
