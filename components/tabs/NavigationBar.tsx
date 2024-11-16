import React from 'react';
import { View, StyleSheet, ImageSourcePropType } from 'react-native';
import NavigationItem from '@components/tabs/NavigationItem';

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

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  navigationBar: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 3,
    paddingTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorContainer: {
    width: '100%',
    paddingHorizontal: 75,
    paddingTop: 17,
    paddingBottom: 8,
    alignItems: 'center',
  },
  indicator: {
    width: 135,
    height: 5,
    borderRadius: 100,
    backgroundColor: '#000',
  },
});

export default NavigationBar;
