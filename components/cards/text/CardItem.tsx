import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  title: string;
  label: string;
  onTouchTap?: () => Promise<void>;
};

export default function CardItem({ title, label, onTouchTap }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onTouchTap}>
      <View style={styles.textContainer}>
        <Text style={styles.textHeader}>{title}</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textBody}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: 17,
    paddingVertical: 14,
  },
  textContainer: {},
  textHeader: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 27,
    fontWeight: '700',
    color: '#484C52',
    opacity: 0.75,
  },
  textBody: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 19,
    fontWeight: '700',
    color: '#484C52',
    opacity: 0.75,
  },
});
