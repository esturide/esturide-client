import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import LoadingDots from 'react-native-loading-dots';

type Props = {
  visible: boolean;
  modal?: boolean;
};

export default function Loading({ visible, modal = false }: Props) {
  if (modal) {
    return (
      <>
        <Modal animationType="slide" visible={visible}>
          <View style={styles.container}>
            <View style={styles.wrapper}>
              <LoadingDots />
            </View>
          </View>
        </Modal>
      </>
    );
  } else {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <LoadingDots />
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: 100,
  },
});
