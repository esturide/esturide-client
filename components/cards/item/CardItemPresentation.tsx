import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  title: string;
};

export default function CardItemPresentation({
  title,
  children,
}: PropsWithChildren<Props>) {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.textHeader}>{title}</Text>
      </View>

      <View style={styles.body}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 5,
  },
  textHeader: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 27,
    fontWeight: '700',
    color: '#254a44',
    opacity: 0.75,
  },
});
