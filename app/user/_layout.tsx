import { View } from 'react-native';
import React from 'react';
import { Slot } from 'expo-router';
import NavigationBar from '@components/tabs/NavigationBar';

import styles from '@styles/layouts/UserLayout';

export default function UserLayout() {
  const navigationItem = [
    {
      icon: require('@assets/icons/tabs/home.png'),
      href: '',
      onPress: async () => console.log('Home page'),
    },
    {
      icon: require('@assets/icons/tabs/add.png'),
      href: '',
      onPress: async () => console.log('Home page'),
    },
    {
      icon: require('@assets/icons/tabs/notify.png'),
      href: '',
      onPress: async () => console.log('Home page'),
    },
    {
      icon: require('@assets/icons/tabs/user.png'),
      href: '',
      onPress: async () => console.log('Home page'),
    },
  ];

  return (
    <View style={styles.flexContainer}>
      <Slot />

      <NavigationBar navigationItems={navigationItem} />
    </View>
  );
}
