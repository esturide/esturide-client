import { Text, TextInput, View, ViewStyle } from 'react-native';
import styles from '@styles/Inputs';

type Props = {
  label: string;
  onChangeText: (text: string) => void;
  style: ViewStyle;
};

const InputLabel = ({ label, onChangeText, style }: Props) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} onChangeText={onChangeText} />
      </View>
    </View>
  );
};

export default InputLabel;
