import React from "react";
import { Pressable, Text } from "react-native";
import styles from "@/styles/InputButtons";

const ButtonSubmit = ({ title, onPress, style }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.btnSubmit,
        style,
        pressed ? styles.btnSubmitPressed : null,
      ]}
    >
      <Text style={styles.btnSubmitText}>{title}</Text>
    </Pressable>
  );
};

export default ButtonSubmit;
