import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { InputButton } from '@components/buttons/InputButton';
import { formatTime } from '@libs/format/dates';
import InputLabel from '@components/inputs/InputLabel';

type Props = {
  label: string;
  setTime?: (time: Date) => void;
};

export default function InputTime({ label, setTime }: Props) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [timeValue, setTimeValue] = useState(new Date());

  const swapDatePicker = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    setTimeValue(date);

    if (setTime !== null) {
      setTime(date);
    }

    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={swapDatePicker}>
        <InputLabel label={label} value={formatTime(timeValue)} readOnly />
      </Pressable>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={'time'}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
