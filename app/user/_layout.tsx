import { View } from 'react-native';
import React from 'react';
import { Slot } from 'expo-router';
import NavigationBar from '@components/tabs/NavigationBar';

import homeIcon from '@assets/icons/tabs/home.png';
import addIcon from '@assets/icons/tabs/add.png';
import notifyIcon from '@assets/icons/tabs/notify.png';
import profileIcon from '@assets/icons/tabs/user.png';

import styles from '@styles/layouts/UserLayout';

export default function UserLayout() {
  const navigationItem = [
    {
      icon: homeIcon,
      href: '/user',
      onPress: async () => console.log('Home page'),
    },
    {
      icon: addIcon,
      href: '/user',
      onPress: async () => console.log('Travels and rides page'),
    },
    {
      icon: notifyIcon,
      href: '/user',
      onPress: async () => console.log('Notifications page'),
    },
    {
      icon: profileIcon,
      href: '/user/profile',
      onPress: async () => console.log('Profile page'),
    },
  ];

  return (
    <View style={styles.flexContainer}>
      <Slot />

      <NavigationBar navigationItems={navigationItem} />
    </View>
  );
}
