import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

export default function AbsoluteBottomLayout({ children }: PropsWithChildren) {
  return <View style={styles.overlay}>{children}</View>;
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 1,
  },
});
