import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';

type Props = {
  visible: boolean;
};

export function Loading({ visible }: Props) {
  // const [showModal, setShowModal] = useState(visible);

  return (
    <>
      <Modal animationType="slide" visible={visible}>
        <Text>Loading...</Text>
      </Modal>
    </>
  );
}
