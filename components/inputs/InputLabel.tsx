import React, { useState } from 'react';
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

type TypeInput = 'text' | 'numeric';

type Props = {
  label: string;
  onChangeText?: (text: string) => void;
  style?: ViewStyle;
  placeholder?: string;
  floatLabel?: boolean;
  value?: string;
  readOnly?: boolean;
  typeInput?: TypeInput;
  error?: boolean;
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
  value = null,
  floatLabel = false,
  readOnly = false,
  error = false,
  typeInput,
}: Props) => {
  if (placeholder === undefined) {
    placeholder = label;
  }

  const [textPlaceholder, setTextPlaceholder] = useState(placeholder);
  const [input, setInput] = useState('');
  const [showLabel, setShowLabel] = useState(false);
  const [expanded, setExpanded] = useState(false);

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

  if (floatLabel) {
    return (
      <View
        style={[
          styles.container,
          style,
          expanded && styles.expandedBoxAnimation,
        ]}
      >
        {showLabel && <Text style={styles.label}>{label}</Text>}
        <View
          style={error ? styles.inputErrorContainer : styles.inputContainer}
        >
          <TextInput
            style={styles.input}
            placeholder={textPlaceholder}
            onChangeText={onInputEvent}
            onFocus={toggleShowLabel(true)}
            onBlur={toggleShowLabel(false)}
            value={value}
            readOnly={readOnly}
            keyboardType={typeInput == 'text' ? 'default' : 'numeric'}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={error ? styles.inputErrorContainer : styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder={textPlaceholder}
          value={value}
          readOnly={readOnly}
          keyboardType={typeInput == 'text' ? 'default' : 'numeric'}
        />
      </View>
    </View>
  );
};

export default InputLabel;
