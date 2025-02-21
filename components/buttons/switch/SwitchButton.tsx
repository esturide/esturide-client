import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  defaultDriverColor,
  defaultPassengerColor,
} from '@const/DefaultColors';

type Props = {
  onToggleSwitch?: () => Promise<void>;
  firstLabel: string;
  secondLabel: string;
  thirdLabel?: string;

  firstStateStyle?: string;
  secondStateStyle?: string;
  thirdStateStyle?: string;

  disabled?: boolean;
  swapState?: boolean;
};

const SwitchButton = ({
  onToggleSwitch,
  firstLabel,
  secondLabel,
  thirdLabel = 'Disabled',
  firstStateStyle = defaultDriverColor,
  secondStateStyle = defaultPassengerColor,
  thirdStateStyle = 'gray',
  disabled = false,
  swapState = false,
}: Props) => {
  const [isOn, setIsOn] = useState(swapState);

  const toggleSwitch = async () => {
    if (!disabled) {
      setIsOn((previousState) => !previousState);
    }

    if (onToggleSwitch != null) {
      await onToggleSwitch();
    }
  };

  if (disabled) {
    return (
      <TouchableOpacity
        style={[styles.switch, { backgroundColor: thirdStateStyle }]}
        onPress={toggleSwitch}
      >
        <Text style={styles.switchText}>{thirdLabel}</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={[
          styles.switch,
          isOn
            ? { backgroundColor: firstStateStyle }
            : { backgroundColor: secondStateStyle },
        ]}
        onPress={toggleSwitch}
      >
        <Text style={styles.switchText}>{isOn ? firstLabel : secondLabel}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  switch: {
    flex: 1,
    paddingHorizontal: 44,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: 'gray',
  },
  switchText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SwitchButton;
