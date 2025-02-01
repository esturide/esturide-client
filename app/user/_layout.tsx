import React, { useEffect } from 'react';
import { View } from 'react-native';
import { router, Slot } from 'expo-router';
import NavigationBar from '@components/tabs/NavigationBar';

import homeIcon from '@assets/icons/tabs/home.png';
import addIcon from '@assets/icons/tabs/add.png';
import notifyIcon from '@assets/icons/tabs/notify.png';
import profileIcon from '@assets/icons/tabs/user.png';

import styles from '@styles/layouts/UserLayout';
import { useTravelScheduleRoute } from '@components/context/RouteNavigatorContext';

export default function UserLayout() {
  const { currentRoute, setCurrentRoute } = useTravelScheduleRoute();

  useEffect(() => {
    router.replace(currentRoute);
  }, [currentRoute]);

  const navigationItem = [
    {
      icon: homeIcon,
      href: '/user',
      onPress: async () => console.log('Home page'),
    },
    {
      icon: addIcon,
      href: currentRoute,
      onPress: async () => {
        console.log('Travels and rides page');
      },
    },
    {
      icon: notifyIcon,
      href: '/user/notify',
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
      <View style={styles.container}>
        <Slot />
      </View>
      <NavigationBar navigationItems={navigationItem} />
    </View>
  );
}
