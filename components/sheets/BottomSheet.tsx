import { View } from 'react-native';

import styles from '@styles/Sheets';

const BottomSheet = () => {
  return (
    <View style={styles.bottomSheet}>
      <View style={styles.bottomSheetGrabHandle} />
    </View>
  );
};

export default BottomSheet;
