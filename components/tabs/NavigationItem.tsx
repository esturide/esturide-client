import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import { router } from 'expo-router';

import styles from '@styles/NavigationItemStyle';

interface NavigationItemProps {
  icon: ImageSourcePropType;
  onPress: () => Promise<void>;
  href: string;
  isActive?: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  icon,
  onPress,
  href,
  isActive = true,
}) => {
  const onPressed = async () => {
    await onPress();

    router.push(href);
  };

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={onPressed}
      accessibilityRole="button"
      accessibilityState={{ selected: isActive }}
    >
      <View
        style={[styles.iconContainer, isActive && styles.activeIconContainer]}
      >
        <Image
          resizeMode="contain"
          source={icon}
          style={styles.icon}
          accessibilityIgnoresInvertColors={true}
        />
      </View>
    </TouchableOpacity>
  );
};

export default NavigationItem;
