import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import {
  defaultCancelColor,
  defaultDriverColor,
  defaultPassengerColor,
  SchemeButton,
} from '@const/DefaultColors';

type Props = {
  label: string;
  onToggle?: (state: boolean) => Promise<void>;
  scheme: SchemeButton;
};

const InputSwitch = ({ label, onToggle, scheme }: Props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const onToggleSwitch = async () => {
    toggleSwitch();

    if (onToggle != null) {
      await onToggle(isEnabled);
    }
  };

  const trackColors = {
    blue: { false: '#767577', true: '#d0d4e3' },
    green: { false: '#767577', true: '#cfe4df' },
    red: { false: '#767577', true: '#e4cdcd' },
  };

  const thumbColors = {
    blue: defaultPassengerColor,
    green: defaultDriverColor,
    red: defaultCancelColor,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Switch
        trackColor={trackColors[scheme]}
        thumbColor={isEnabled ? thumbColors[scheme] : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onToggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  label: {
    fontSize: 20,
  },
});

export default InputSwitch;
