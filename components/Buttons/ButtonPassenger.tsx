import { Text, View } from 'react-native';
import { VisualIcon } from '@components/visuals/VisualIcon';
import styles from '@styles/InputButtons';

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
