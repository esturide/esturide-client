import { ReactNode } from 'react';
import { View } from 'react-native';

import styles from '@/styles/layouts/register/RegisterLayoutStyle';

interface Props {
  children: string | ReactNode;
}

export default function LayoutRegister({ children }: Props) {
  return (
    <>
      <View style={styles.container}>{children}</View>
    </>
  );
}
