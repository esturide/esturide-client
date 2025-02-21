import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  label: string;
  onTouchTap?: () => Promise<void>;
};

export default function TextItem({ label, onTouchTap }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onTouchTap}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 17,
    paddingVertical: 14,
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
});
