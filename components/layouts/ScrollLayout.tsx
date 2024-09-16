import { ReactNode } from 'react';
import { ScrollView } from 'react-native';

import styles from '@styles/layouts/ScrollLayoutStyle';

type Props = {
  children: ReactNode;
};

export default function ScrollLayout({ children }: Props) {
  return (
    <ScrollView style={styles.view} contentContainerStyle={styles.container}>
      {children}
    </ScrollView>
  );
}
