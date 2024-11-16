import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export const InfoSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Información</Text>
      <Image
        resizeMode="contain"
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/d15ccaa318ae47d3ace2dfebd63f7426/fbd450479d76129de26d345a1a85835d9dfa7d63e6a813b8f62964423b1cc11c?apiKey=d15ccaa318ae47d3ace2dfebd63f7426&',
        }}
        style={styles.icon}
        accessibilityLabel="Information icon"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 17,
    paddingVertical: 14,
    marginTop: 12,
  },
  text: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 19,
    fontWeight: '700',
    color: '#484C52',
    opacity: 0.75,
  },
  icon: {
    width: 24,
    aspectRatio: 1,
  },
});
