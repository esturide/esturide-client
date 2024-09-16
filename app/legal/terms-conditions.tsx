import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TermsConditions() {
  return (
    <View>
      <Text style={styles.text}>This is the terms and conditions page.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
