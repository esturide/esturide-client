import { Text, View } from 'react-native';
import { VisualIcon } from '@components/visuals/VisualIcon';
import styles from '@styles/InputButtons';

const Option = (props) => {
  return (
    <View style={styles.optionContainer}>
      <View style={styles.optionChild}>
        <Text style={styles.optionLabel}>Label</Text>
        <VisualIcon type={'arrow-forward-ios'} style={styles.optionIcon} />
      </View>
    </View>
  );
};

export default Option;
