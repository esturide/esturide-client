import { Modal, Pressable, View } from 'react-native';
import { PropsWithChildren } from 'react';

import styles from '@styles/modals/BottomSheetsStyleModal';

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: (close: boolean) => void;
  onPress?: (visible: boolean) => Promise<void>;
}>;

const BottomSheetModal = ({ isVisible, children, onClose, onPress }: Props) => {
  const onChange = async () => {
    onClose(false);

    if (onPress !== null) {
      await onPress(isVisible);
    }
  };

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.bottomSheet}>
        <Pressable onPress={onChange}>
          <View style={styles.bottomSheetGrabHandle} />
        </Pressable>

        <View style={styles.container}>{children}</View>
      </View>
    </Modal>
  );
};

export default BottomSheetModal;
