import React from 'react';
import { View, ImageSourcePropType } from 'react-native';
import NavigationItem from '@components/tabs/NavigationItem';

import styles from '@styles/NavigationBarStyle';

interface ItemNavProps {
  icon: ImageSourcePropType;
  onPress: () => Promise<void>;
  href: string;
}

interface NavigationBarProps {
  navigationItems: ItemNavProps[];
}

const NavigationBar: React.FC<NavigationBarProps> = ({ navigationItems }) => {
  return (
    <View style={styles.container}>
      <View style={styles.navigationBar}>
        {navigationItems.map((item, index) => (
          <NavigationItem
            key={index}
            icon={item.icon}
            href={item.href}
            onPress={item.onPress}
          />
        ))}
      </View>
      <View style={styles.indicatorContainer}>
        <View style={styles.indicator} />
      </View>
    </View>
  );
};

export default NavigationBar;
