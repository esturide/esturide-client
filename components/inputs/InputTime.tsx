import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import InputLabel from '@components/inputs/InputLabel';
import { formatTime } from '@libs/format/dates';

export interface Time {
  readonly hour: number;
  readonly minute: number;
}

type Props = {
  label: string;
  setTime?: (time: Date) => void;
  value?: Date;
};

export default function InputTime({ label, setTime, value = null }: Props) {
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
        date={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
