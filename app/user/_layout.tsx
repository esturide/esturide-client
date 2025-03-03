import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { router, Slot } from 'expo-router';
import NavigationBar from '@components/tabs/NavigationBar';
import { useRouteNavigator } from '@components/context/RouteNavigatorContext';
import { useUserManagerContext } from '@components/context/UserManagerContext';
import {
  requestCurrentScheduleTravel,
  requestIsCurrentScheduleTravel,
} from '@libs/request/travels/requestCurrentTravel';

import styles from '@styles/layouts/UserLayout';

import homeIcon from '@assets/icons/tabs/home.png';
import addIcon from '@assets/icons/tabs/add.png';
import notifyIcon from '@assets/icons/tabs/notify.png';
import profileIcon from '@assets/icons/tabs/user.png';

export default function UserLayout() {
  const [haveCurrentTravel, setHaveCurrentTravel] = useState(false);
  const { currentRoute, setCurrentRoute } = useRouteNavigator();
  const { setOnTraveling } = useUserManagerContext();
  const { setUserType } = useUserManagerContext();

  useEffect(() => {
    const queryCurrentTravel = async () => {
      const haveTravel = await requestIsCurrentScheduleTravel();

      setHaveCurrentTravel(haveTravel);

      if (haveCurrentTravel) {
        setCurrentRoute('/user/maps/driver/waiting-passengers');
        setUserType('Driver');
        setOnTraveling(true);
      }
    };

    queryCurrentTravel();
  }, [haveCurrentTravel]);

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
