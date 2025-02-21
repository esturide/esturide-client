import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AdBanner from '@components/banners/AdBanner';
import { useUserManagerContext } from '@components/context/UserManagerContext';

export function MainIndexUser() {
  const { userType } = useUserManagerContext();

  return (
    <View style={styles.container}>
      <AdBanner />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Próximamente</Text>
        <Text style={styles.description}>
          Estamos trabajando en esta funcionalidad para ofrecerte una mejor
          experiencia.
        </Text>
        {userType === 'Driver' && <Text>Conductor</Text>}
        {userType === 'Passenger' && <Text>Pasajero</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: '#3D3D3D',
    fontFamily: 'Inter, sans-serif',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  description: {
    color: '#3D3D3D',
    fontFamily: 'Inter, sans-serif',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  footerImage: {
    width: '100%',
    aspectRatio: 4.08,
    marginTop: 'auto',
  },
});

export default MainIndexUser;
