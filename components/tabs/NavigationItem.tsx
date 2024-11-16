import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import { router } from 'expo-router';

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

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 52,
    height: 52,
  },
  activeIconContainer: {
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#FFF',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default NavigationItem;
