import React from "react";
import { Text, TextInput, View } from "react-native";
import styles from "@/styles/Inputs";

const InputLabel = ({ label, onChangeText, style }) => {
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
