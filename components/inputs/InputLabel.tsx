import { useState } from 'react';
import {
  LayoutAnimation,
  Platform,
  Text,
  TextInput,
  UIManager,
  View,
  ViewStyle,
} from 'react-native';
import styles from '@styles/Inputs';

type Props = {
  label: string;
  onChangeText: (text: string) => void;
  style: ViewStyle;
  placeholder?: string;
  floatLabel?: boolean;
  errorMessage?: string; // Nueva prop para manejar el mensaje de error
};

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const InputLabel = ({
  label,
  placeholder,
  onChangeText,
  style,
  floatLabel = false,
  errorMessage, // Recibimos el mensaje de error
}: Props) => {
  const [input, setInput] = useState('');
  const [showLabel, setShowLabel] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Si el placeholder es undefined, usamos el valor de `label`
  if (!placeholder) {
    placeholder = label;
  }

  const toggleExpandAnimation = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  const toggleShowLabel = (show: boolean) => () => {
    if (show) {
      setShowLabel(true);
      toggleExpandAnimation();
    } else {
      if (input.length <= 0) {
        setShowLabel(false);
        toggleExpandAnimation();
      }
    }
  };

  const onInputEvent = (input: string) => {
    onChangeText(input);
    setInput(input);
  };

  return (
    <View
      style={[
        styles.container,
        style,
        floatLabel && expanded && styles.expandedBoxAnimation,
      ]}
    >
      {floatLabel && showLabel && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={onInputEvent}
          onFocus={toggleShowLabel(true)}
          onBlur={toggleShowLabel(false)}
        />
      </View>
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

export default InputLabel;
