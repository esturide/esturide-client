import { Text, View } from 'react-native';
import styles from '@styles/InputButtons';
import { VisualIcon } from '@components/visuals/VisualIcon';

const ButtonPassenger = () => {
  return (
    <View style={styles.btnPassenger}>
      <View style={styles.btnPassengerView}>
        <VisualIcon type={'person'} style={styles.passengerIcon} />
      </View>
      <View style={styles.btnPassengerTextContainer}>
        <Text style={styles.btnPassengerLabel}>Label</Text>
        <Text style={styles.btnPassengerText}>Text</Text>
      </View>
    </View>
  );
};

export default ButtonPassenger;
