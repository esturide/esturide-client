import { Text, View } from 'react-native';
import { VisualIcon } from '@components/visuals/VisualIcon';
import styles from '@styles/InputButtons';

const ButtonDriver = () => {
  return (
    <View style={styles.btnDriver}>
      <View style={styles.btnDriverView}>
        <VisualIcon type={'drive-eta'} style={styles.driverIcon} />
      </View>
      <View style={styles.btnDriverTextContainer}>
        <Text style={styles.btnDriverLabel}>Label</Text>
        <Text style={styles.btnDriverText}>Text</Text>
      </View>
    </View>
  );
};

export default ButtonDriver;
