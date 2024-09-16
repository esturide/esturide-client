import { ReactNode } from 'react';
import { View, Text } from 'react-native';

import styles from '@styles/layouts/register/RegisterLayoutStyle';

interface Props {
  children: string | ReactNode;
}

export default function LayoutRegister({ children }: Props) {
  if (typeof children === 'string') {
    return (
      <>
        <View style={styles.container}>
          <Text>{children}</Text>
        </View>
      </>
    );
  }

  return (
    <>
      <View style={styles.container}>{children}</View>
    </>
  );
}
