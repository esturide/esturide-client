// src/components/AdBanner.tsx

import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Obtiene el ancho de la pantalla

const AdBanner: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/ad-banner.png')}
        style={styles.bannerImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.9, // Ajuste de ancho según el tamaño de la pantalla
    height: 50, // Ajusta la altura según sea necesario
    backgroundColor: '#f0f0f0', // Color de fondo por defecto
    alignSelf: 'center', // Centrar horizontalmente
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 10,
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default AdBanner;
