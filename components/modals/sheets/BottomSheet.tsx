import React from 'react';
import { Pressable, View } from 'react-native';
import { PropsWithChildren } from 'react';

import styles from '@styles/modals/BottomSheetStyle';

type Props = PropsWithChildren<{
  onPress?: (visible: boolean) => Promise<void>;
}>;

const BottomSheet = ({ children, onPress }: Props) => {
  const onChange = async () => {
    if (onPress !== null) {
      await onPress(true);
    }
  };

  return (
    <View style={styles.bottomSheet}>
      <Pressable onPress={onChange}>
        <View style={styles.bottomSheetGrabHandle} />
      </Pressable>

      <View style={styles.container}>{children}</View>
    </View>
  );
};

export default BottomSheet;
