import { Button, Modal, Pressable, View } from 'react-native';
import { PropsWithChildren, useState } from 'react';

import styles from '@styles/BottomSheetsStyle';

type Props = PropsWithChildren<{
  title?: string;
  isVisible: boolean;
  onClose?: (close: boolean) => Promise<void>;
}>;

const BottomSheet = ({ title = '', isVisible, children, onClose }: Props) => {
  const [closeModal, setCloseModal] = useState(isVisible);

  const onChange = async () => {
    setCloseModal(false);

    if (onClose !== null) {
      await onClose(closeModal);
    }
  };

  return (
    <Modal animationType="slide" transparent={true} visible={closeModal}>
      <View style={styles.bottomSheet}>
        <Pressable onPress={onChange}>
          <View style={styles.bottomSheetGrabHandle} />
        </Pressable>

        <View>{children}</View>
      </View>
    </Modal>
  );
};

export default BottomSheet;
