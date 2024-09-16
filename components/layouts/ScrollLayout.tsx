import React from 'react';
import { ScrollView } from 'react-native';

import styles from '@/styles/layouts/ScrollLayoutStyle';

type Props = {
  children: React.ReactNode;
};

export default function ScrollLayout({ children }: Props) {
  return (
    <ScrollView style={styles.view} contentContainerStyle={styles.container}>
      {children}
    </ScrollView>
  );
}
