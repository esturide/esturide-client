import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '@styles/Inputs';
import { VisualIcon } from '@components/visuals/VisualIcon';

type Props = {
  label: string;
  onChangeText: (text: string) => void;
};

const InputPassword = ({ label, onChangeText }: Props) => {
  const [isSecure, setIsSecure] = useState(true);

  return (
    <View style={[styles.container]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          secureTextEntry={isSecure}
        />
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setIsSecure(!isSecure)}
        >
          <VisualIcon
            type={isSecure ? 'visibility' : 'visibility-off'}
            size={24}
            color={isSecure ? '#000' : '#fff'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputPassword;
