import React, { useState } from 'react';
import { View, Text, Pressable, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '@/styles/Inputs';

const InputDate = ({ label, value, onChange, style }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    onChange(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <Pressable onPress={showDatepicker} style={styles.inputContainer}>
        <Text style={styles.dateText}>
          {value ? value.toLocaleDateString() : " "}
        </Text>
      </Pressable>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}
    </View>
  );
};

export default InputDate;
