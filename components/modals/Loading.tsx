import React from 'react';
import { Modal, View, ActivityIndicator } from 'react-native';
import styles from '@styles/LoadingStyle';

type Props = {
  visible: boolean;
};

export function Loading({ visible }: Props) {
  return (
    <>
      <Modal animationType="slide" visible={visible}>
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      </Modal>
    </>
  );
}
