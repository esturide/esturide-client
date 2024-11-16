import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ActionItemProps {
  title: string;
  iconUri: string;
}

export const ActionItem: React.FC<ActionItemProps> = ({ title, iconUri }) => {
  return (
    <TouchableOpacity style={styles.container} accessibilityRole="button">
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image
          resizeMode="contain"
          source={{ uri: iconUri }}
          style={styles.icon}
          accessibilityLabel={`${title} icon`}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 17,
    paddingVertical: 14,
    marginTop: 13,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 19,
    fontWeight: '700',
    color: '#484C52',
    opacity: 0.75,
  },
  iconContainer: {
    width: 24,
    aspectRatio: 1,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
});
